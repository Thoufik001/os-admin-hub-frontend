import {
  u as useStore,
  r as React,
  O as policyObjects,
  l as policyActions,
  j as jsx,
  A as AppShell,
  P as PageHeader,
  L as Link,
  n as ShieldIcon,
  S as SearchIcon,
  t as formatRelativeTime,
} from "./index-Df4dNtFP.js";
import { S as StatusPill } from "./StatusPill-DNoDot1.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-9XonwzbX.js";
import "./index-CWQB4imr.js";

const actionLanguage = {
  read: "view",
  create: "create",
  update: "update",
  delete: "delete",
  assign: "assign",
  revoke: "revoke",
};

const objectLanguage = {
  IAM_VIEW: "identity & access records",
  STAFF_VIEW: "staff records",
  DEPARTMENT_VIEW: "departments",
  PATIENT_VIEW: "patient records",
  SERVICE_VIEW: "services",
  PRESCRIPTION_VIEW: "prescriptions",
  AUDIT_VIEW: "audit logs",
};

function policyRule(role, action, object, state) {
  const verb = actionLanguage[action];
  const objectName = objectLanguage[object];
  if (state === "allowed") return `${role} can ${verb} ${objectName}.`;
  if (state === "limited") return `${role} can ${verb} ${objectName} with limits.`;
  return `${role} cannot ${verb} ${objectName}.`;
}

function MetricCard({ label, value, hint, tone }) {
  return jsx.jsxs("section", {
    className: `orbac-metric-card orbac-metric-${tone}`,
    children: [
      jsx.jsxs("div", {
        className: "orbac-metric-top",
        children: [
          jsx.jsx("span", {
            className: "orbac-metric-icon",
            children: jsx.jsx(ShieldIcon, { className: "h-4 w-4" }),
          }),
          jsx.jsx("span", { className: "orbac-metric-label", children: label }),
        ],
      }),
      jsx.jsx("div", { className: "orbac-metric-value", children: value }),
      jsx.jsx("div", { className: "orbac-metric-hint", children: hint }),
    ],
  });
}

function O() {
  const roles = useStore((state) => state.roles);
  const [query, setQuery] = React.useState("");
  const [roleFilter, setRoleFilter] = React.useState("all");
  const [statusFilter, setStatusFilter] = React.useState("all");

  const metrics = React.useMemo(() => {
    let allowed = 0;
    let rolesWithPermissions = 0;

    for (const role of roles) {
      let hasPermission = false;
      for (const object of policyObjects) {
        for (const action of policyActions) {
          const state = role.permissions[object]?.[action] ?? "denied";
          if (state === "allowed") allowed += 1;
          if (state !== "denied") hasPermission = true;
        }
      }
      if (hasPermission) rolesWithPermissions += 1;
    }

    return {
      allowed,
      roles: rolesWithPermissions,
      actions: policyActions.length,
      objects: policyObjects.length,
    };
  }, [roles]);

  const filterCounts = React.useMemo(() => {
    const counts = {
      all: 0,
      allowed: 0,
      limited: 0,
      denied: 0,
      byRole: {},
    };

    for (const role of roles) {
      let roleTotal = 0;
      for (const object of policyObjects) {
        for (const action of policyActions) {
          const state = role.permissions[object]?.[action] ?? "denied";
          counts[state] += 1;
          counts.all += 1;
          roleTotal += 1;
        }
      }
      counts.byRole[role.key] = roleTotal;
    }

    return counts;
  }, [roles]);

  const policies = React.useMemo(() => {
    const rows = [];

    for (const role of roles) {
      for (const object of policyObjects) {
        for (const action of policyActions) {
          const state = role.permissions[object]?.[action] ?? "denied";
          rows.push({
            id: `${role.id}-${object}-${action}`,
            role: role.name,
            roleKey: role.key,
            action,
            object,
            state,
            updatedAt: role.updatedAt,
          });
        }
      }
    }

    return rows
      .filter((row) => roleFilter === "all" || row.roleKey === roleFilter)
      .filter((row) => statusFilter === "all" || row.state === statusFilter)
      .filter((row) => {
        if (!query) return true;
        const haystack = `${row.role} ${row.action} ${row.object} ${policyRule(row.role, row.action, row.object, row.state)}`;
        return haystack.toLowerCase().includes(query.toLowerCase());
      });
  }, [roles, query, roleFilter, statusFilter]);

  return jsx.jsxs(AppShell, {
    children: [
      jsx.jsx(PageHeader, {
        title: "ORBAC Policies",
        description: "Access policy reference by role, action, and object.",
        actions: jsx.jsxs(Link, {
          to: "/roles",
          className:
            "inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-3 text-xs text-foreground hover:bg-accent",
          children: [jsx.jsx(ShieldIcon, { className: "h-3.5 w-3.5" }), " Edit in matrix"],
        }),
      }),
      jsx.jsxs("div", {
        className: "orbac-page space-y-5 px-8 py-6",
        children: [
          jsx.jsxs("div", {
            className: "orbac-metrics-grid",
            children: [
              jsx.jsx(MetricCard, {
                label: "Rules",
                value: metrics.allowed,
                hint: "Allow rules",
                tone: "rules",
              }),
              jsx.jsx(MetricCard, {
                label: "Roles",
                value: metrics.roles,
                hint: "Permitted roles",
                tone: "roles",
              }),
              jsx.jsx(MetricCard, {
                label: "Actions",
                value: metrics.actions,
                hint: "Access verbs",
                tone: "actions",
              }),
              jsx.jsx(MetricCard, {
                label: "Objects",
                value: metrics.objects,
                hint: "Data views",
                tone: "objects",
              }),
            ],
          }),
          jsx.jsxs("div", {
            className: "orbac-policy-toolbar flex flex-wrap items-center gap-2",
            children: [
              jsx.jsxs("div", {
                className: "relative w-72",
                children: [
                  jsx.jsx(SearchIcon, {
                    className:
                      "pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground",
                  }),
                  jsx.jsx("input", {
                    value: query,
                    onChange: (event) => setQuery(event.target.value),
                    placeholder: "Search policies...",
                    className:
                      "h-8 w-full rounded-md border border-border bg-surface pl-8 pr-3 text-sm placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/40",
                  }),
                ],
              }),
              jsx.jsxs(Select, {
                value: roleFilter,
                onValueChange: setRoleFilter,
                children: [
                  jsx.jsx(SelectTrigger, {
                    className: "h-8 w-[180px] bg-surface text-xs",
                    children: jsx.jsx(SelectValue, { placeholder: "Role" }),
                  }),
                  jsx.jsxs(SelectContent, {
                    children: [
                      jsx.jsx(SelectItem, { value: "all", children: `All (${filterCounts.all})` }),
                      roles.map((role) =>
                        jsx.jsx(SelectItem, { value: role.key, children: `${role.name} (${filterCounts.byRole[role.key] ?? 0})` }, role.id),
                      ),
                    ],
                  }),
                ],
              }),
              jsx.jsxs(Select, {
                value: statusFilter,
                onValueChange: setStatusFilter,
                children: [
                  jsx.jsx(SelectTrigger, {
                    className: "h-8 w-[140px] bg-surface text-xs",
                    children: jsx.jsx(SelectValue, { placeholder: "Status" }),
                  }),
                  jsx.jsxs(SelectContent, {
                    children: [
                      jsx.jsx(SelectItem, { value: "all", children: `All (${filterCounts.all})` }),
                      jsx.jsx(SelectItem, { value: "allowed", children: `Allowed (${filterCounts.allowed})` }),
                      jsx.jsx(SelectItem, { value: "limited", children: `Limited (${filterCounts.limited})` }),
                      jsx.jsx(SelectItem, { value: "denied", children: `Denied (${filterCounts.denied})` }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          jsx.jsxs("div", {
            className: "orbac-policy-table overflow-hidden rounded-xl border border-border bg-card",
            children: [
              jsx.jsxs("table", {
                className: "orbac-policy-table-inner w-full text-sm",
                children: [
                  jsx.jsx("thead", {
                    children: jsx.jsxs("tr", {
                      className: "border-b border-border bg-surface/50 text-left text-xs uppercase tracking-wider text-muted-foreground",
                      children: [
                        jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Role" }),
                        jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Action" }),
                        jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Object" }),
                        jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Status" }),
                        jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Rule" }),
                        jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Updated" }),
                      ],
                    }),
                  }),
                  jsx.jsx("tbody", {
                    className: "divide-y divide-border",
                    children: policies.slice(0, 400).map((policy) =>
                      jsx.jsxs(
                        "tr",
                        {
                          className: "hover:bg-surface/40",
                          children: [
                            jsx.jsx("td", {
                              className: "px-4 py-3",
                              children: jsx.jsxs("span", {
                                className: "orbac-role-pill",
                                children: [jsx.jsx(ShieldIcon, { className: "orbac-role-icon" }), policy.role],
                              }),
                            }),
                            jsx.jsx("td", {
                              className: "px-4 py-3",
                              children: jsx.jsx("span", { className: "orbac-action-text", children: policy.action }),
                            }),
                            jsx.jsx("td", {
                              className: "px-4 py-3",
                              children: jsx.jsx("span", { className: "orbac-object-pill", children: policy.object }),
                            }),
                            jsx.jsx("td", {
                              className: "px-4 py-3",
                              children: jsx.jsx(StatusPill, {
                                tone: policy.state === "allowed" ? "success" : policy.state === "limited" ? "warning" : "neutral",
                                children: policy.state === "allowed" ? "Allowed" : policy.state === "limited" ? "Limited" : "Denied",
                              }),
                            }),
                            jsx.jsx("td", {
                              className: "orbac-rule-cell px-4 py-3 text-muted-foreground",
                              children: policyRule(policy.role, policy.action, policy.object, policy.state),
                            }),
                            jsx.jsx("td", {
                              className: "px-4 py-3 text-xs text-muted-foreground",
                              children: formatRelativeTime(policy.updatedAt),
                            }),
                          ],
                        },
                        policy.id,
                      ),
                    ),
                  }),
                ],
              }),
              policies.length > 400
                ? jsx.jsxs("div", {
                    className: "border-t border-border bg-surface/30 px-4 py-2 text-center text-xs text-muted-foreground",
                    children: ["Showing first 400 of ", policies.length, ". Use filters to narrow results."],
                  })
                : null,
            ],
          }),
        ],
      }),
    ],
  });
}

export { O as component };
