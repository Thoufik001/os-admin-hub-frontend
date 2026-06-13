import {
  c as createIcon,
  r as React,
  j as jsx,
  A as AppShell,
  P as PageHeader,
  n as ShieldIcon,
  S as SearchIcon,
} from "./index-Df4dNtFP.js";
import { S as StatusPill } from "./StatusPill-DNoDot1.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-9XonwzbX.js";
import "./index-CWQB4imr.js";

const UserIcon = createIcon("user-round", [
  ["path", { d: "M18 20a6 6 0 0 0-12 0", key: "user-1" }],
  ["circle", { cx: "12", cy: "10", r: "4", key: "user-2" }],
]);
const UserPlusIcon = createIcon("user-plus", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "user-plus-1" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "user-plus-2" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "user-plus-3" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "user-plus-4" }],
]);
const BuildingIcon = createIcon("building-2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18", key: "building-1" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v8", key: "building-2" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v11", key: "building-3" }],
  ["path", { d: "M10 6h4", key: "building-4" }],
  ["path", { d: "M10 10h4", key: "building-5" }],
]);
const StethoscopeIcon = createIcon("stethoscope", [
  ["path", { d: "M4.8 2.3v4.2a4.2 4.2 0 0 0 8.4 0V2.3", key: "doctor-1" }],
  ["path", { d: "M8.5 14.5a4.5 4.5 0 0 0 9 0V12", key: "doctor-2" }],
  ["circle", { cx: "18", cy: "10", r: "2", key: "doctor-3" }],
]);
const HeartPulseIcon = createIcon("heart-pulse", [
  ["path", { d: "M19 14c1.5-1.5 3-3.4 3-5.7A5.2 5.2 0 0 0 12 6.2 5.2 5.2 0 0 0 2 8.3C2 12.8 12 21 12 21s1.4-1.1 3-2.7", key: "nurse-1" }],
  ["path", { d: "M3.2 12h3.2l1.8-3.5 3.6 7 1.8-3.5H21", key: "nurse-2" }],
]);
const BriefcaseIcon = createIcon("briefcase", [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "manager-1" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "manager-2" }],
  ["path", { d: "M2 12h20", key: "manager-3" }],
]);
const ClipboardIcon = createIcon("clipboard-list", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", key: "front-1" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2", key: "front-2" }],
  ["path", { d: "M8 12h8", key: "front-3" }],
  ["path", { d: "M8 16h5", key: "front-4" }],
]);
const PillIcon = createIcon("pill", [
  ["path", { d: "m10.5 20.5 10-10a4.95 4.95 0 0 0-7-7l-10 10a4.95 4.95 0 0 0 7 7Z", key: "pharmacy-1" }],
  ["path", { d: "m8.5 8.5 7 7", key: "pharmacy-2" }],
]);
const CircleMinusIcon = createIcon("circle-minus", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "minus-1" }],
  ["path", { d: "M8 12h8", key: "minus-2" }],
]);
const EditIcon = createIcon("square-pen", [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "edit-1" }],
  ["path", { d: "M18.4 2.6a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4Z", key: "edit-2" }],
]);
const ChevronRightIcon = createIcon("chevron-right", [["path", { d: "m9 18 6-6-6-6", key: "chevron-1" }]]);
const TrashIcon = createIcon("trash-2", [
  ["path", { d: "M3 6h18", key: "trash-1" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "trash-2" }],
  ["path", { d: "M19 6 18 20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6", key: "trash-3" }],
]);
const CheckIcon = createIcon("check", [["path", { d: "m20 6-11 11-5-5", key: "check-1" }]]);
const XIcon = createIcon("x", [
  ["path", { d: "M18 6 6 18", key: "x-1" }],
  ["path", { d: "m6 6 12 12", key: "x-2" }],
]);
const CalendarIcon = createIcon("calendar-days", [
  ["path", { d: "M8 2v4", key: "calendar-1" }],
  ["path", { d: "M16 2v4", key: "calendar-2" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "calendar-3" }],
  ["path", { d: "M3 10h18", key: "calendar-4" }],
]);
const FlaskIcon = createIcon("flask-conical", [
  ["path", { d: "M10 2v7.3L4.3 19a2 2 0 0 0 1.7 3h12a2 2 0 0 0 1.7-3L14 9.3V2", key: "flask-1" }],
  ["path", { d: "M8.5 2h7", key: "flask-2" }],
]);
const RefreshIcon = createIcon("refresh-cw", [
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.8 9.8 0 0 1-6.7-2.7L3 16", key: "refresh-1" }],
  ["path", { d: "M3 21v-5h5", key: "refresh-2" }],
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.8 9.8 0 0 1 6.7 2.7L21 8", key: "refresh-3" }],
  ["path", { d: "M16 8h5V3", key: "refresh-4" }],
]);

const roleIcons = {
  Staff: UserIcon,
  Owner: ShieldIcon,
  "Front Desk": ClipboardIcon,
  Doctor: StethoscopeIcon,
  Manager: BriefcaseIcon,
  Nurse: HeartPulseIcon,
  Pharmacist: PillIcon,
};

function RoleTag({ role, empty = false, more }) {
  if (more) {
    return jsx.jsxs("span", { className: "staff-role-pill staff-role-pill-more", children: ["+", more] });
  }
  const Icon = empty ? CircleMinusIcon : roleIcons[role] ?? ShieldIcon;
  return jsx.jsxs("span", {
    className: empty ? "staff-role-pill staff-role-pill-empty" : "staff-role-pill",
    children: [jsx.jsx(Icon, { className: "staff-role-pill-icon" }), role],
  });
}

function PatientStatusTag({ tone, icon: Icon, children }) {
  return jsx.jsxs("span", {
    className: `patient-status patient-status-${tone}`,
    children: [jsx.jsx(Icon, { className: "h-3.5 w-3.5" }), children],
  });
}

function MetricCard({ icon: Icon, label, value, hint, tone }) {
  return jsx.jsxs("section", {
    className: `orbac-metric-card orbac-metric-${tone}`,
    children: [
      jsx.jsxs("div", {
        className: "orbac-metric-top",
        children: [
          jsx.jsx("span", { className: "orbac-metric-icon", children: jsx.jsx(Icon, { className: "h-4 w-4" }) }),
          jsx.jsx("span", { className: "orbac-metric-label", children: label }),
        ],
      }),
      jsx.jsx("div", { className: "orbac-metric-value", children: value }),
      jsx.jsx("div", { className: "orbac-metric-hint", children: hint }),
    ],
  });
}

function Section({ title, description, children }) {
  return jsx.jsxs("section", {
    className: "ds-section",
    children: [
      jsx.jsxs("header", {
        className: "ds-section-header",
        children: [
          jsx.jsx("h2", { children: title }),
          description ? jsx.jsx("p", { children: description }) : null,
        ],
      }),
      jsx.jsx("div", { className: "ds-section-body", children }),
    ],
  });
}

function ComponentRow({ label, children }) {
  return jsx.jsxs("div", {
    className: "ds-component-row",
    children: [
      jsx.jsx("span", { className: "ds-component-label", children: label }),
      jsx.jsx("div", { className: "ds-component-content", children }),
    ],
  });
}

function DesignSystemPage() {
  const [filter, setFilter] = React.useState("all");
  const [sort, setSort] = React.useState("recent");

  return jsx.jsxs(AppShell, {
    children: [
      jsx.jsx(PageHeader, {
        title: "Design System",
        description: "A shared component catalog for the admin dashboard.",
        actions: jsx.jsxs("button", {
          className: "ds-button ds-button-primary",
          children: [jsx.jsx(EditIcon, { className: "h-4 w-4" }), "Update guide"],
        }),
      }),
      jsx.jsxs("div", {
        className: "design-system-page px-8 py-6",
        children: [
          jsx.jsx(Section, {
            title: "Foundations",
            description: "Core decisions all pages should reuse before custom layout.",
            children: jsx.jsxs("div", {
              className: "ds-token-grid",
              children: [
                jsx.jsxs("div", { className: "ds-token-card", children: [jsx.jsx("span", { className: "ds-token-kicker", children: "Typography" }), jsx.jsx("strong", { children: "SF Pro / 13px base" }), jsx.jsx("p", { children: "12, 13, 14, 16, 18, and 24px only." })] }),
                jsx.jsxs("div", { className: "ds-token-card", children: [jsx.jsx("span", { className: "ds-token-kicker", children: "Radius" }), jsx.jsx("strong", { children: "8px cards, 6px controls" }), jsx.jsx("p", { children: "Tables, drawers, filters, buttons and tags share the same curve." })] }),
                jsx.jsxs("div", { className: "ds-token-card", children: [jsx.jsx("span", { className: "ds-token-kicker", children: "Spacing" }), jsx.jsx("strong", { children: "8px rhythm" }), jsx.jsx("p", { children: "Toolbars use 8px gaps, page gutters use 32px." })] }),
              ],
            }),
          }),
          jsx.jsx(Section, {
            title: "Color Tokens",
            description: "Use tokens instead of page-specific shades.",
            children: jsx.jsxs("div", {
              className: "ds-swatch-grid",
              children: [
                jsx.jsx(ColorSwatch, { name: "Strong", value: "#292929", variable: "--foreground" }),
                jsx.jsx(ColorSwatch, { name: "Default", value: "#5D5D5D", variable: "--muted-foreground" }),
                jsx.jsx(ColorSwatch, { name: "Subtle", value: "#7F7F7F", variable: "--muted-foreground" }),
                jsx.jsx(ColorSwatch, { name: "Selected", value: "#F5F5F5", variable: "--accent" }),
                jsx.jsx(ColorSwatch, { name: "Border", value: "#F2F2F2", variable: "--border" }),
                jsx.jsx(ColorSwatch, { name: "Primary", value: "#5B5CE2", variable: "--primary" }),
              ],
            }),
          }),
          jsx.jsx(Section, {
            title: "Buttons",
            description: "One button system with variants for primary, secondary, icon and danger actions.",
            children: jsx.jsxs("div", {
              className: "ds-stack",
              children: [
                jsx.jsx(ComponentRow, {
                  label: "Primary",
                  children: jsx.jsxs("button", { className: "ds-button ds-button-primary", children: [jsx.jsx(UserPlusIcon, { className: "h-4 w-4" }), "Add staff"] }),
                }),
                jsx.jsx(ComponentRow, {
                  label: "Secondary",
                  children: jsx.jsxs("button", { className: "ds-button ds-button-secondary", children: [jsx.jsx(EditIcon, { className: "h-4 w-4" }), "Edit"] }),
                }),
                jsx.jsx(ComponentRow, {
                  label: "Icon",
                  children: jsx.jsxs("div", {
                    className: "ds-inline",
                    children: [
                      jsx.jsx("button", { className: "ds-icon-button", "aria-label": "Edit", children: jsx.jsx(EditIcon, { className: "h-4 w-4" }) }),
                      jsx.jsx("button", { className: "ds-icon-button", "aria-label": "Open", children: jsx.jsx(ChevronRightIcon, { className: "h-4 w-4" }) }),
                    ],
                  }),
                }),
                jsx.jsx(ComponentRow, {
                  label: "Danger",
                  children: jsx.jsxs("button", { className: "ds-button ds-button-danger", children: [jsx.jsx(TrashIcon, { className: "h-4 w-4" }), "Delete"] }),
                }),
              ],
            }),
          }),
          jsx.jsx(Section, {
            title: "Search And Filters",
            description: "Search, filter and sort controls share height, radius, border, and typography.",
            children: jsx.jsxs("div", {
              className: "ds-toolbar-demo",
              children: [
                jsx.jsxs("div", {
                  className: "ds-search-control",
                  children: [
                    jsx.jsx(SearchIcon, { className: "h-4 w-4 text-muted-foreground" }),
                    jsx.jsx("input", { placeholder: "Search by name, username, or email", readOnly: true }),
                  ],
                }),
                jsx.jsxs(Select, {
                  value: filter,
                  onValueChange: setFilter,
                  children: [
                    jsx.jsx(SelectTrigger, { className: "h-8 w-[180px] bg-surface text-xs", children: jsx.jsx(SelectValue, {}) }),
                    jsx.jsxs(SelectContent, { children: [jsx.jsx(SelectItem, { value: "all", children: "All (54)" }), jsx.jsx(SelectItem, { value: "active", children: "Active (24)" }), jsx.jsx(SelectItem, { value: "inactive", children: "Inactive (4)" })] }),
                  ],
                }),
                jsx.jsxs(Select, {
                  value: sort,
                  onValueChange: setSort,
                  children: [
                    jsx.jsx(SelectTrigger, { className: "h-8 w-[150px] bg-surface text-xs", children: jsx.jsx(SelectValue, {}) }),
                    jsx.jsxs(SelectContent, { children: [jsx.jsx(SelectItem, { value: "recent", children: "Sort: Recent" }), jsx.jsx(SelectItem, { value: "name", children: "Sort: Name" })] }),
                  ],
                }),
              ],
            }),
          }),
          jsx.jsx(Section, {
            title: "Tags",
            description: "Role, account, patient and permission tags must keep their shared shape and sizing.",
            children: jsx.jsxs("div", {
              className: "ds-stack",
              children: [
                jsx.jsx(ComponentRow, {
                  label: "Roles",
                  children: jsx.jsxs("div", { className: "staff-role-list ds-open-list", children: [jsx.jsx(RoleTag, { role: "Staff" }), jsx.jsx(RoleTag, { role: "Owner" }), jsx.jsx(RoleTag, { role: "Front Desk" }), jsx.jsx(RoleTag, { role: "Doctor" }), jsx.jsx(RoleTag, { role: "Manager" }), jsx.jsx(RoleTag, { role: "Nurse" }), jsx.jsx(RoleTag, { role: "Pharmacist" }), jsx.jsx(RoleTag, { role: "No role", empty: true }), jsx.jsx(RoleTag, { more: 2 })] }),
                }),
                jsx.jsx(ComponentRow, {
                  label: "Account",
                  children: jsx.jsxs("div", { className: "ds-inline", children: [jsx.jsx(StatusPill, { tone: "active", children: "Active" }), jsx.jsx(StatusPill, { tone: "inactive", children: "Inactive" }), jsx.jsx(StatusPill, { tone: "invited", children: "Invited" })] }),
                }),
                jsx.jsx(ComponentRow, {
                  label: "Patient",
                  children: jsx.jsxs("div", { className: "ds-inline", children: [jsx.jsx(PatientStatusTag, { tone: "in-care", icon: HeartPulseIcon, children: "In care" }), jsx.jsx(PatientStatusTag, { tone: "critical", icon: CircleMinusIcon, children: "Critical" }), jsx.jsx(PatientStatusTag, { tone: "scheduled", icon: CalendarIcon, children: "Scheduled" }), jsx.jsx(PatientStatusTag, { tone: "sent-lab", icon: FlaskIcon, children: "Sent for lab" }), jsx.jsx(PatientStatusTag, { tone: "follow-up", icon: RefreshIcon, children: "Follow-up" }), jsx.jsx(PatientStatusTag, { tone: "completed", icon: CheckIcon, children: "Completed" })] }),
                }),
                jsx.jsx(ComponentRow, {
                  label: "Permissions",
                  children: jsx.jsxs("div", { className: "ds-inline", children: [jsx.jsx(StatusPill, { tone: "success", children: "Allowed" }), jsx.jsx(StatusPill, { tone: "warning", children: "Limited" }), jsx.jsx(StatusPill, { tone: "neutral", children: "Denied" })] }),
                }),
              ],
            }),
          }),
          jsx.jsx(Section, {
            title: "Metrics",
            description: "All metric bento cards share this structure: icon and label, number, short decision hint.",
            children: jsx.jsxs("div", {
              className: "orbac-metrics-grid",
              children: [
                jsx.jsx(MetricCard, { icon: UserIcon, label: "Staff", value: "15", hint: "Total accounts", tone: "rules" }),
                jsx.jsx(MetricCard, { icon: ShieldIcon, label: "Active", value: "11", hint: "Can sign in", tone: "roles" }),
                jsx.jsx(MetricCard, { icon: BuildingIcon, label: "Departments", value: "7", hint: "Care units", tone: "actions" }),
                jsx.jsx(MetricCard, { icon: CircleMinusIcon, label: "No role", value: "2", hint: "Needs access", tone: "objects" }),
              ],
            }),
          }),
          jsx.jsx(Section, {
            title: "Tables",
            description: "Table rows, avatars, chevron buttons and footer pagination should match this pattern.",
            children: jsx.jsxs("div", {
              className: "ds-table-card",
              children: [
                jsx.jsxs("table", {
                  className: "w-full text-sm",
                  children: [
                    jsx.jsx("thead", {
                      children: jsx.jsxs("tr", {
                        className: "border-b border-border bg-surface/50 text-left text-xs uppercase tracking-wider text-muted-foreground",
                        children: [
                          jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Name" }),
                          jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Department" }),
                          jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Roles" }),
                          jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Status" }),
                          jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Action" }),
                        ],
                      }),
                    }),
                    jsx.jsxs("tbody", {
                      className: "divide-y divide-border",
                      children: [
                        jsx.jsx(TableRow, { initials: "AR", name: "Anita Rao", meta: "anita.rao@zyephr.health", department: "Administration", roles: ["Owner"], status: "active" }),
                        jsx.jsx(TableRow, { initials: "ML", name: "Marcus Lee", meta: "marcus.lee@zyephr.health", department: "Cardiology", roles: ["Doctor", "Hospital Admin"], status: "active" }),
                        jsx.jsx(TableRow, { initials: "DA", name: "Diego Alves", meta: "diego.alves@zyephr.health", department: "Pediatrics", roles: [], status: "invited" }),
                      ],
                    }),
                  ],
                }),
                jsx.jsxs("div", {
                  className: "admin-table-footer",
                  children: [
                    jsx.jsx("span", { children: "Showing 1-3 of 54 records" }),
                    jsx.jsxs("div", {
                      className: "admin-table-pagination",
                      children: [
                        jsx.jsx("button", { type: "button", children: jsx.jsx(ChevronRightIcon, { className: "audit-page-prev h-4 w-4" }) }),
                        jsx.jsx("span", { children: "1 / 18" }),
                        jsx.jsx("button", { type: "button", children: jsx.jsx(ChevronRightIcon, { className: "h-4 w-4" }) }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          jsx.jsx(Section, {
            title: "Sidebars",
            description: "Staff, departments, patients, audit details and settings should all follow this read/edit/danger pattern.",
            children: jsx.jsx("div", {
              className: "ds-drawer-demo",
              children: jsx.jsxs("aside", {
                className: "ds-drawer-panel",
                children: [
                  jsx.jsxs("header", {
                    className: "ds-drawer-header",
                    children: [
                      jsx.jsxs("div", { children: [jsx.jsx("h3", { children: "Department details" }), jsx.jsx("p", { children: "Cardiology" })] }),
                      jsx.jsxs("div", { className: "ds-inline", children: [jsx.jsxs("button", { className: "ds-button ds-button-secondary", children: [jsx.jsx(EditIcon, { className: "h-4 w-4" }), "Edit"] }), jsx.jsx("button", { className: "ds-icon-button", children: jsx.jsx(XIcon, { className: "h-4 w-4" }) })] }),
                    ],
                  }),
                  jsx.jsxs("div", { className: "ds-drawer-body", children: [jsx.jsx(DetailLine, { label: "Code", value: "CARD" }), jsx.jsx(DetailLine, { label: "Head of Department", value: "Marcus Lee" }), jsx.jsx(DetailLine, { label: "Staff", value: "3 members" })] }),
                  jsx.jsxs("section", { className: "ds-danger-zone", children: [jsx.jsx("h4", { children: "Danger zone" }), jsx.jsx("p", { children: "Changing active state or deleting a record requires confirmation." }), jsx.jsxs("div", { className: "ds-inline", children: [jsx.jsxs("button", { className: "ds-button ds-button-secondary", children: [jsx.jsx(CircleMinusIcon, { className: "h-4 w-4" }), "Deactivate"] }), jsx.jsxs("button", { className: "ds-button ds-button-danger", children: [jsx.jsx(TrashIcon, { className: "h-4 w-4" }), "Delete"] })] })] }),
                ],
              }),
            }),
          }),
        ],
      }),
    ],
  });
}

function ColorSwatch({ name, value, variable }) {
  return jsx.jsxs("div", {
    className: "ds-swatch",
    children: [
      jsx.jsx("span", { className: "ds-swatch-dot", style: { backgroundColor: value } }),
      jsx.jsxs("div", { children: [jsx.jsx("strong", { children: name }), jsx.jsx("span", { children: value }), jsx.jsx("code", { children: variable })] }),
    ],
  });
}

function TableRow({ initials, name, meta, department, roles, status }) {
  return jsx.jsxs("tr", {
    className: "hover:bg-surface/60",
    children: [
      jsx.jsx("td", {
        className: "px-4 py-3",
        children: jsx.jsxs("div", {
          className: "flex items-center gap-3",
          children: [
            jsx.jsx("span", { className: "ds-avatar", children: initials }),
            jsx.jsxs("div", { children: [jsx.jsx("div", { className: "font-medium text-foreground", children: name }), jsx.jsx("div", { className: "text-xs text-muted-foreground", children: meta })] }),
          ],
        }),
      }),
      jsx.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: department }),
      jsx.jsx("td", { className: "px-4 py-3", children: roles.length ? jsx.jsxs("div", { className: "staff-role-list", children: roles.slice(0, 2).map((role) => jsx.jsx(RoleTag, { role }, role)) }) : jsx.jsx(RoleTag, { role: "No role", empty: true }) }),
      jsx.jsx("td", { className: "px-4 py-3", children: jsx.jsx(StatusPill, { tone: status, children: status }) }),
      jsx.jsx("td", { className: "px-4 py-3 text-right", children: jsx.jsx("button", { className: "ds-icon-button", children: jsx.jsx(ChevronRightIcon, { className: "h-4 w-4" }) }) }),
    ],
  });
}

function DetailLine({ label, value }) {
  return jsx.jsxs("div", {
    className: "ds-detail-line",
    children: [jsx.jsx("span", { children: label }), jsx.jsx("strong", { children: value })],
  });
}

export { DesignSystemPage as component };
