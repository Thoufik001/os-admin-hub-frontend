import {
  c as createIcon,
  r as React,
  j as jsx,
  A as AppShell,
  P as PageHeader,
  S as SearchIcon,
} from "./index-Df4dNtFP.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-9XonwzbX.js";
import "./index-NYxxxYXH.js";
import "./index-CWQB4imr.js";

const LogInIcon = createIcon("log-in", [
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "login-1" }],
  ["path", { d: "m10 17 5-5-5-5", key: "login-2" }],
  ["path", { d: "M15 12H3", key: "login-3" }],
]);
const PencilIcon = createIcon("pencil-line", [
  ["path", { d: "M12 20h9", key: "pencil-1" }],
  ["path", { d: "M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z", key: "pencil-2" }],
]);
const AlertIcon = createIcon("triangle-alert", [
  ["path", { d: "m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3Z", key: "alert-1" }],
  ["path", { d: "M12 9v4", key: "alert-2" }],
  ["path", { d: "M12 17h.01", key: "alert-3" }],
]);
const UserPlusIcon = createIcon("user-round-plus", [
  ["path", { d: "M2 21a8 8 0 0 1 13.3-6", key: "user-1" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "user-2" }],
  ["path", { d: "M19 16v6", key: "user-3" }],
  ["path", { d: "M22 19h-6", key: "user-4" }],
]);
const ShieldIcon = createIcon("shield-check", [
  ["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.25-2.5a1 1 0 0 1 1.5 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1Z", key: "shield-1" }],
  ["path", { d: "m9 12 2 2 4-4", key: "shield-2" }],
]);
const DownloadIcon = createIcon("download", [
  ["path", { d: "M12 3v12", key: "download-1" }],
  ["path", { d: "m7 10 5 5 5-5", key: "download-2" }],
  ["path", { d: "M5 21h14", key: "download-3" }],
]);
const TrashIcon = createIcon("trash-2", [
  ["path", { d: "M3 6h18", key: "trash-1" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "trash-2" }],
  ["path", { d: "M19 6 18 20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6", key: "trash-3" }],
  ["path", { d: "M10 11v6", key: "trash-4" }],
  ["path", { d: "M14 11v6", key: "trash-5" }],
]);
const PowerIcon = createIcon("power", [
  ["path", { d: "M12 2v10", key: "power-1" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.8 0", key: "power-2" }],
]);
const ChevronRightIcon = createIcon("chevron-right", [["path", { d: "m9 18 6-6-6-6", key: "chevron-1" }]]);

const auditRows = [
  {
    id: "login-rk",
    action: "User logged in",
    detail: "Successful login from 192.168.1.24",
    performer: "Dr. Ramesh Kumar",
    performerRole: "Doctor",
    initials: "RK",
    module: "Session",
    timestamp: "2 min ago",
    tone: "success",
    icon: LogInIcon,
  },
  {
    id: "hod-cardio",
    action: "Head of department changed",
    detail: "Changed head of Cardiology to Dr. Arjun Menon",
    performer: "Suresh A.",
    performerRole: "Owner",
    initials: "SA",
    module: "Department",
    timestamp: "14 min ago",
    tone: "warning",
    icon: PencilIcon,
  },
  {
    id: "failed-login",
    action: "Failed login",
    detail: "3 failed attempts from 203.0.113.9 (unrecognised IP)",
    performer: "Unknown",
    performerRole: "-",
    initials: "?",
    module: "Session",
    timestamp: "1 hr ago",
    tone: "danger",
    icon: AlertIcon,
  },
  {
    id: "staff-selvi",
    action: "Staff added",
    detail: "Added Selvi Nadar as Head Nurse, ICU",
    performer: "Suresh A.",
    performerRole: "Owner",
    initials: "SA",
    module: "Staff",
    timestamp: "3 hr ago",
    tone: "success",
    icon: UserPlusIcon,
  },
  {
    id: "role-deepa",
    action: "Role assigned",
    detail: "Assigned Receptionist role to Deepa Nair",
    performer: "Priya M.",
    performerRole: "Manager",
    initials: "PM",
    module: "Role",
    timestamp: "4 hr ago",
    tone: "warning",
    icon: ShieldIcon,
  },
  {
    id: "audit-export",
    action: "Audit exported",
    detail: "Exported staff activity CSV (last 30 days)",
    performer: "Priya M.",
    performerRole: "Manager",
    initials: "PM",
    module: "Audit log",
    timestamp: "Yesterday",
    tone: "warning",
    icon: DownloadIcon,
  },
  {
    id: "department-deleted",
    action: "Department deleted",
    detail: 'Removed legacy "Temp OPD" department',
    performer: "Suresh A.",
    performerRole: "Owner",
    initials: "SA",
    module: "Department",
    timestamp: "Yesterday",
    tone: "danger",
    icon: TrashIcon,
  },
  {
    id: "login-kr",
    action: "User logged in",
    detail: "Successful login from 192.168.1.41",
    performer: "Kavitha Rao",
    performerRole: "Lab Technician",
    initials: "KR",
    module: "Session",
    timestamp: "Yesterday",
    tone: "success",
    icon: LogInIcon,
  },
  {
    id: "permission-manager",
    action: "Permission changed",
    detail: "Changed Manager permissions - enabled Assign on Staff",
    performer: "Suresh A.",
    performerRole: "Owner",
    initials: "SA",
    module: "Role",
    timestamp: "2 days ago",
    tone: "warning",
    icon: PencilIcon,
  },
  {
    id: "staff-deactivated",
    action: "Staff deactivated",
    detail: "Deactivated Anand Thomas (pharmacist) - on leave",
    performer: "Priya M.",
    performerRole: "Manager",
    initials: "PM",
    module: "Staff",
    timestamp: "2 days ago",
    tone: "success",
    icon: PowerIcon,
  },
];

const moduleFilters = [
  ["all", "All", 327],
  ["Session", "Session", 74],
  ["Department", "Department", 68],
  ["Staff", "Staff", 94],
  ["Role", "Role", 91],
  ["Audit log", "Audit log", 12],
];

const avatarTone = {
  "Dr. Ramesh Kumar": "audit-avatar-slate",
  "Suresh A.": "audit-avatar-blue",
  "Priya M.": "audit-avatar-dark",
  "Kavitha Rao": "audit-avatar-green",
  Unknown: "audit-avatar-muted",
};

function AuditPage() {
  const [query, setQuery] = React.useState("");
  const [moduleFilter, setModuleFilter] = React.useState("all");
  const [sortBy, setSortBy] = React.useState("recent");
  const filteredRows = React.useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return auditRows.filter((row) => {
      const matchesModule = moduleFilter === "all" || row.module === moduleFilter;
      const haystack = `${row.action} ${row.detail} ${row.performer} ${row.performerRole} ${row.module}`.toLowerCase();
      return matchesModule && (!normalizedQuery || haystack.includes(normalizedQuery));
    });
  }, [query, moduleFilter]);
  const visibleRows = React.useMemo(() => {
    return [...filteredRows].sort((a, b) => {
      if (sortBy === "action") return a.action.localeCompare(b.action);
      if (sortBy === "module") return a.module.localeCompare(b.module) || a.action.localeCompare(b.action);
      if (sortBy === "performer") return a.performer.localeCompare(b.performer) || a.action.localeCompare(b.action);
      return auditRows.findIndex((row) => row.id === a.id) - auditRows.findIndex((row) => row.id === b.id);
    });
  }, [filteredRows, sortBy]);
  const totalEvents = moduleFilter === "all" && !query ? 327 : visibleRows.length;
  const pageCount = Math.max(1, Math.ceil(totalEvents / 10));

  return jsx.jsxs(AppShell, {
    children: [
      jsx.jsx(PageHeader, {
        title: "Records & Audit",
        description: "Every meaningful admin and system event, captured for audit and compliance.",
      }),
      jsx.jsxs("div", {
        className: "space-y-4 px-8 py-6",
        children: [
          jsx.jsxs("div", {
            className: "flex flex-wrap items-center gap-2",
            children: [
              jsx.jsxs("div", {
                className: "relative w-72",
                children: [
                  jsx.jsx(SearchIcon, { className: "pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" }),
                  jsx.jsx("input", {
                    value: query,
                    onChange: (event) => setQuery(event.target.value),
                    placeholder: "Search events, details, or performers",
                    className: "h-8 w-full rounded-md border border-border bg-surface pl-8 pr-3 text-sm placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/40",
                  }),
                ],
              }),
              jsx.jsxs(Select, {
                value: moduleFilter,
                onValueChange: (value) => setModuleFilter(value),
                children: [
                  jsx.jsx(SelectTrigger, {
                    className: "h-8 w-[180px] bg-surface text-xs",
                    children: jsx.jsx(SelectValue, { placeholder: "Module" }),
                  }),
                  jsx.jsx(SelectContent, {
                    children: moduleFilters.map(([value, label, count]) =>
                      jsx.jsx(SelectItem, { value, children: `${label} (${count})` }, value),
                    ),
                  }),
                ],
              }),
              jsx.jsxs(Select, {
                value: sortBy,
                onValueChange: (value) => setSortBy(value),
                children: [
                  jsx.jsx(SelectTrigger, {
                    className: "h-8 w-[170px] bg-surface text-xs",
                    children: jsx.jsx(SelectValue, { placeholder: "Sort" }),
                  }),
                  jsx.jsxs(SelectContent, {
                    children: [
                      jsx.jsx(SelectItem, { value: "recent", children: "Sort: Recent" }),
                      jsx.jsx(SelectItem, { value: "action", children: "Sort: Action" }),
                      jsx.jsx(SelectItem, { value: "module", children: "Sort: Module" }),
                      jsx.jsx(SelectItem, { value: "performer", children: "Sort: Performer" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          jsx.jsxs("div", {
            className: "audit-log-table-wrap overflow-hidden rounded-xl border border-border bg-card",
            children: [
              jsx.jsxs("table", {
                className: "audit-log-table w-full text-sm",
                children: [
                  jsx.jsx("thead", {
                    children: jsx.jsxs("tr", {
                      className: "border-b border-border bg-surface/50 text-left text-xs uppercase tracking-wider text-muted-foreground",
                      children: [
                        jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Action" }),
                        jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Detail" }),
                        jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Performed by" }),
                        jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Module" }),
                        jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Timestamp" }),
                        jsx.jsx("th", { className: "px-4 py-2.5 font-medium", "aria-label": "Open event" }),
                      ],
                    }),
                  }),
                  jsx.jsx("tbody", {
                    className: "divide-y divide-border",
                    children:
                      visibleRows.length === 0
                        ? jsx.jsx("tr", {
                            children: jsx.jsx("td", {
                              colSpan: 6,
                              className: "px-4 py-10 text-center text-sm text-muted-foreground",
                              children: "No events match your filters.",
                            }),
                          })
                        : visibleRows.map((row) => jsx.jsx(AuditRow, { row }, row.id)),
                  }),
                ],
              }),
              jsx.jsxs("div", {
                className: "admin-table-footer",
                children: [
                  jsx.jsx("span", {
                    children: `Showing 1-${Math.min(10, totalEvents)} of ${totalEvents} events`,
                  }),
                  jsx.jsxs("div", {
                    className: "admin-table-pagination",
                    children: [
                      jsx.jsx("button", { type: "button", "aria-label": "Previous page", children: jsx.jsx(ChevronRightIcon, { className: "audit-page-prev h-4 w-4" }) }),
                      jsx.jsx("span", { children: `1 / ${pageCount}` }),
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

function AuditRow({ row }) {
  const Icon = row.icon;
  return jsx.jsxs("tr", {
    className: "audit-row hover:bg-surface/40",
    children: [
      jsx.jsx("td", {
        className: "audit-action-cell px-4 py-3",
        children: jsx.jsxs("div", {
          className: "audit-action-wrap",
          children: [
            jsx.jsx("span", { className: `audit-action-icon audit-action-${row.tone}`, children: jsx.jsx(Icon, { className: "h-4 w-4" }) }),
            jsx.jsx("span", { className: "audit-action-title", children: row.action }),
          ],
        }),
      }),
      jsx.jsx("td", { className: "audit-detail-cell px-4 py-3", children: row.detail }),
      jsx.jsx("td", {
        className: "px-4 py-3",
        children: jsx.jsxs("div", {
          className: "audit-actor-cell",
          children: [
            jsx.jsx("div", { className: `audit-avatar ${avatarTone[row.performer] ?? "audit-avatar-blue"}`, children: row.initials }),
            jsx.jsxs("div", {
              className: "min-w-0",
              children: [
                jsx.jsx("div", { className: "truncate font-medium text-foreground", children: row.performer }),
                jsx.jsx("div", { className: "truncate text-xs text-muted-foreground", children: row.performerRole }),
              ],
            }),
          ],
        }),
      }),
      jsx.jsx("td", { className: "px-4 py-3", children: jsx.jsx("span", { className: "audit-module-pill", children: row.module }) }),
      jsx.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: row.timestamp }),
      jsx.jsx("td", { className: "px-4 py-3 text-right", children: jsx.jsx(ChevronRightIcon, { className: "audit-row-chevron h-4 w-4" }) }),
    ],
  });
}

export { AuditPage as component };
