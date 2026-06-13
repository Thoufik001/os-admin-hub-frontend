import {
  c as createIcon,
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

const ChevronRightIcon = createIcon("chevron-right", [["path", { d: "m9 18 6-6-6-6", key: "chevron-1" }]]);
const doctorRoleIconPaths = [
  ["path", { d: "M4.8 2.3v4.2a4.2 4.2 0 0 0 8.4 0V2.3", key: "doctor-1" }],
  ["path", { d: "M8.5 14.5a4.5 4.5 0 0 0 9 0V12", key: "doctor-2" }],
  ["circle", { cx: "18", cy: "10", r: "2", key: "doctor-3" }],
];
const DoctorRoleIcon = createIcon("stethoscope", doctorRoleIconPaths);
const nurseRoleIconPaths = [
  ["path", { d: "M19 14c1.5-1.5 3-3.4 3-5.7A5.2 5.2 0 0 0 12 6.2 5.2 5.2 0 0 0 2 8.3C2 12.8 12 21 12 21s1.4-1.1 3-2.7", key: "nurse-1" }],
  ["path", { d: "M3.2 12h3.2l1.8-3.5 3.6 7 1.8-3.5H21", key: "nurse-2" }],
];
const NurseRoleIcon = createIcon("heart-pulse", nurseRoleIconPaths);
const managerRoleIconPaths = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "manager-1" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "manager-2" }],
  ["path", { d: "M2 12h20", key: "manager-3" }],
];
const ManagerRoleIcon = createIcon("briefcase", managerRoleIconPaths);
const pharmacistRoleIconPaths = [
  ["path", { d: "m10.5 20.5 10-10a4.95 4.95 0 0 0-7-7l-10 10a4.95 4.95 0 0 0 7 7Z", key: "pharmacy-1" }],
  ["path", { d: "m8.5 8.5 7 7", key: "pharmacy-2" }],
];
const PharmacistRoleIcon = createIcon("pill", pharmacistRoleIconPaths);
const frontDeskRoleIconPaths = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", key: "front-1" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2", key: "front-2" }],
  ["path", { d: "M8 12h8", key: "front-3" }],
  ["path", { d: "M8 16h5", key: "front-4" }],
];
const FrontDeskRoleIcon = createIcon("clipboard-list", frontDeskRoleIconPaths);
const staffRoleIconPaths = [
  ["path", { d: "M18 20a6 6 0 0 0-12 0", key: "staff-1" }],
  ["circle", { cx: "12", cy: "10", r: "4", key: "staff-2" }],
];
const StaffRoleIcon = createIcon("user-round", staffRoleIconPaths);
const roleIconFor = (role) => {
  const value = (role ?? "").toLowerCase();
  if (value.includes("doctor")) return DoctorRoleIcon;
  if (value.includes("nurse")) return NurseRoleIcon;
  if (value.includes("pharmac")) return PharmacistRoleIcon;
  if (value.includes("front") || value.includes("desk") || value.includes("reception")) return FrontDeskRoleIcon;
  if (value.includes("manager")) return ManagerRoleIcon;
  if (value.includes("owner") || value.includes("admin")) return ShieldIcon;
  return StaffRoleIcon;
};
const TABLE_PAGE_SIZE = 50;

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
                    children: policies.slice(0, TABLE_PAGE_SIZE).map((policy) => {
                      const RoleIcon = roleIconFor(policy.role);
                      return jsx.jsxs(
                        "tr",
                        {
                          className: "hover:bg-surface/40",
                          children: [
                            jsx.jsx("td", {
                              className: "px-4 py-3",
                              children: jsx.jsxs("span", {
                                className: "staff-role-pill",
                                children: [jsx.jsx(RoleIcon, { className: "staff-role-pill-icon" }), policy.role],
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
                      );
                    }),
                  }),
                ],
              }),
              jsx.jsxs("div", {
                className: "admin-table-footer",
                children: [
                  jsx.jsx("span", {
                    children: policies.length ? `Showing 1-${Math.min(policies.length, TABLE_PAGE_SIZE)} of ${policies.length} policies` : "Showing 0 of 0 policies",
                  }),
                  jsx.jsxs("div", {
                    className: "admin-table-pagination",
                    children: [
                      jsx.jsx("button", { type: "button", "aria-label": "Previous page", children: jsx.jsx(ChevronRightIcon, { className: "audit-page-prev h-4 w-4" }) }),
                      jsx.jsx("span", { children: `1 / ${Math.max(1, Math.ceil(policies.length / TABLE_PAGE_SIZE))}` }),
                      jsx.jsx("button", { type: "button", "aria-label": "Next page", children: jsx.jsx(ChevronRightIcon, { className: "h-4 w-4" }) }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { O as component };
