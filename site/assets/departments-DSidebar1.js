import {
  c as createIcon,
  u as useStore,
  r as React,
  j as jsx,
  A as AppShell,
  P as PageHeader,
  S as SearchIcon,
  L as Link,
  f as staffName,
  a as actions,
} from "./index-Df4dNtFP.js";
import { S as StatusPill } from "./StatusPill-DNoDot1.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-9XonwzbX.js";
import { P as PlusIcon } from "./plus-C4qARnnh.js";
import "./index-CWQB4imr.js";
import "./index-NYxxxYXH.js";

const DeptMetricIcon = createIcon("building-2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18", key: "dept-1" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v8", key: "dept-2" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v11", key: "dept-3" }],
  ["path", { d: "M10 6h4", key: "dept-4" }],
  ["path", { d: "M10 10h4", key: "dept-5" }],
  ["path", { d: "M10 14h4", key: "dept-6" }],
]);
const HeadMetricIcon = createIcon("crown", [
  ["path", { d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z", key: "head-1" }],
  ["path", { d: "M5 21h14", key: "head-2" }],
]);
const StaffMetricIcon = createIcon("users-round", [
  ["path", { d: "M18 21a8 8 0 0 0-16 0", key: "staffm-1" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "staffm-2" }],
  ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", key: "staffm-3" }],
]);
const GapMetricIcon = createIcon("user-x", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "gap-1" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "gap-2" }],
  ["path", { d: "m17 8 5 5", key: "gap-3" }],
  ["path", { d: "m22 8-5 5", key: "gap-4" }],
]);
const EditIcon = createIcon("square-pen", [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "edit-1" }],
  ["path", { d: "M18.4 2.6a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4Z", key: "edit-2" }],
]);
const XIcon = createIcon("x", [
  ["path", { d: "M18 6 6 18", key: "x-1" }],
  ["path", { d: "m6 6 12 12", key: "x-2" }],
]);
const ChevronRightIcon = createIcon("chevron-right", [["path", { d: "m9 18 6-6-6-6", key: "chevron-1" }]]);
const TABLE_PAGE_SIZE = 50;
const staffInitials = (person) => `${person.firstName?.[0] ?? ""}${person.lastName?.[0] ?? ""}`.toUpperCase();

function MetricCard({ icon: Icon, label, value, hint, tone = "rules" }) {
  return jsx.jsxs("section", {
    className: `orbac-metric-card orbac-metric-${tone}`,
    children: [
      jsx.jsxs("div", { className: "orbac-metric-top", children: [jsx.jsx("span", { className: "orbac-metric-icon", children: jsx.jsx(Icon, { className: "h-4 w-4" }) }), jsx.jsx("span", { className: "orbac-metric-label", children: label })] }),
      jsx.jsx("div", { className: "orbac-metric-value", children: value }),
      jsx.jsx("div", { className: "orbac-metric-hint", children: hint }),
    ],
  });
}

function DepartmentsPage() {
  const departments = useStore((state) => state.departments);
  const staff = useStore((state) => state.staff);
  const [query, setQuery] = React.useState("");
  const [status, setStatus] = React.useState("all");
  const [sortBy, setSortBy] = React.useState("name");
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(null);
  const statusCounts = React.useMemo(() => ({
    all: departments.length,
    active: departments.filter((item) => item.status === "active").length,
    archived: departments.filter((item) => item.status === "archived").length,
  }), [departments]);
  const metrics = React.useMemo(() => ({
    total: departments.length,
    active: departments.filter((item) => item.status === "active").length,
    archived: departments.filter((item) => item.status === "archived").length,
    headless: departments.filter((item) => item.status === "active" && !item.headOfDepartmentId).length,
    headed: departments.filter((item) => item.status === "active" && item.headOfDepartmentId).length,
    unstaffed: departments.filter((item) => item.status === "active" && !staff.some((person) => person.departmentId === item.id && person.status === "active")).length,
  }), [departments, staff]);
  const visible = React.useMemo(() => {
    const needle = query.trim().toLowerCase();
    const countStaff = (department) => staff.filter((person) => person.departmentId === department.id).length;
    return departments
      .filter((department) => {
        const matchesQuery = !needle || `${department.name} ${department.code} ${department.description}`.toLowerCase().includes(needle);
        const matchesStatus = status === "all" || department.status === status;
        return matchesQuery && matchesStatus;
      })
      .sort((a, b) => {
        if (sortBy === "code") return a.code.localeCompare(b.code);
        if (sortBy === "staff") return countStaff(b) - countStaff(a) || a.name.localeCompare(b.name);
        if (sortBy === "status") return a.status.localeCompare(b.status) || a.name.localeCompare(b.name);
        return a.name.localeCompare(b.name);
      });
  }, [departments, staff, query, status, sortBy]);
  const tableRows = visible.slice(0, TABLE_PAGE_SIZE);
  const openNew = () => {
    setSelectedId(null);
    setDrawerOpen(true);
  };
  const openDetails = (id) => {
    setSelectedId(id);
    setDrawerOpen(true);
  };

  return jsx.jsxs(AppShell, {
    children: [
      jsx.jsx(PageHeader, {
        title: "Departments",
        description: "Care units and operational departments. Manage heads and active status.",
        actions: jsx.jsxs("button", { onClick: openNew, className: "inline-flex h-8 items-center gap-1.5 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground hover:bg-primary/90", children: [jsx.jsx(PlusIcon, { className: "h-3.5 w-3.5" }), " Add department"] }),
      }),
      jsx.jsxs("div", {
        className: "orbac-page space-y-4 px-8 py-6",
        children: [
          jsx.jsxs("div", { className: "orbac-metrics-grid", children: [
            jsx.jsx(MetricCard, { icon: DeptMetricIcon, label: "Total departments", value: metrics.total, hint: `${metrics.active} active · ${metrics.archived} inactive`, tone: "rules" }),
            jsx.jsx(MetricCard, { icon: StaffMetricIcon, label: "Operational units", value: metrics.active, hint: "Available for staff assignment", tone: "roles" }),
            jsx.jsx(MetricCard, { icon: HeadMetricIcon, label: "Head coverage", value: `${metrics.headed}/${metrics.active}`, hint: metrics.headless ? `${metrics.headless} active ${metrics.headless === 1 ? "unit needs" : "units need"} a head` : "All active units have a head", tone: "actions" }),
            jsx.jsx(MetricCard, { icon: GapMetricIcon, label: "Staffing gaps", value: metrics.unstaffed, hint: metrics.unstaffed ? "Active units with no active staff" : "All active units have staff", tone: "objects" }),
          ] }),
          jsx.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            jsx.jsxs("div", { className: "relative w-72", children: [jsx.jsx(SearchIcon, { className: "pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" }), jsx.jsx("input", { value: query, onChange: (event) => setQuery(event.target.value), placeholder: "Search departments", className: "h-8 w-full rounded-md border border-border bg-surface pl-8 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/40" })] }),
            jsx.jsxs(Select, { value: status, onValueChange: setStatus, children: [jsx.jsx(SelectTrigger, { className: "h-8 w-[140px] bg-surface text-xs", children: jsx.jsx(SelectValue, { placeholder: "Status" }) }), jsx.jsxs(SelectContent, { children: [jsx.jsx(SelectItem, { value: "all", children: `All (${statusCounts.all})` }), jsx.jsx(SelectItem, { value: "active", children: `Active (${statusCounts.active})` }), jsx.jsx(SelectItem, { value: "archived", children: `Inactive (${statusCounts.archived})` })] })] }),
            jsx.jsxs(Select, { value: sortBy, onValueChange: setSortBy, children: [jsx.jsx(SelectTrigger, { className: "h-8 w-[180px] bg-surface text-xs", children: jsx.jsx(SelectValue, { placeholder: "Sort" }) }), jsx.jsxs(SelectContent, { children: [jsx.jsx(SelectItem, { value: "name", children: "Sort: Name" }), jsx.jsx(SelectItem, { value: "code", children: "Sort: Code" }), jsx.jsx(SelectItem, { value: "staff", children: "Sort: Staff count" }), jsx.jsx(SelectItem, { value: "status", children: "Sort: Status" })] })] }),
          ] }),
          jsx.jsxs("div", {
            className: "overflow-hidden rounded-xl border border-border bg-card",
            children: [
              jsx.jsxs("table", {
                className: "w-full text-sm",
              children: [
                jsx.jsx("thead", { children: jsx.jsxs("tr", { className: "border-b border-border bg-surface/50 text-left text-xs uppercase tracking-wider text-muted-foreground", children: [jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Department" }), jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Code" }), jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Head of Department" }), jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Staff" }), jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Status" }), jsx.jsx("th", { className: "px-4 py-2.5 font-medium" })] }) }),
                jsx.jsx("tbody", { className: "divide-y divide-border", children: tableRows.map((department) => {
                  const head = staff.find((person) => person.id === department.headOfDepartmentId);
                  const staffCount = staff.filter((person) => person.departmentId === department.id).length;
                  return jsx.jsxs("tr", { className: "group hover:bg-surface/60", children: [
                    jsx.jsx("td", { className: "px-4 py-3", children: jsx.jsxs(Link, { to: "/departments/$id", params: { id: department.id }, className: "block group-hover:text-primary", children: [jsx.jsx("div", { className: "font-medium text-foreground", children: department.name }), jsx.jsx("div", { className: "text-xs text-muted-foreground", children: department.description })] }) }),
                    jsx.jsx("td", { className: "px-4 py-3", children: jsx.jsx("span", { className: "mono text-xs uppercase tracking-wider text-muted-foreground", children: department.code }) }),
                    jsx.jsx("td", { className: "px-4 py-3 text-foreground", children: head ? jsx.jsxs("div", { className: "flex items-center gap-2.5", children: [jsx.jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary", children: staffInitials(head) }), jsx.jsx("span", { className: "font-medium text-foreground", children: staffName(head) })] }) : jsx.jsx("span", { className: "text-warning", children: "No head assigned" }) }),
                    jsx.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: staffCount }),
                    jsx.jsx("td", { className: "px-4 py-3", children: jsx.jsx(StatusPill, { tone: department.status === "active" ? "active" : "inactive", children: department.status === "active" ? "Active" : "Inactive" }) }),
                    jsx.jsx("td", { className: "px-4 py-3 text-right", children: jsx.jsx("button", { type: "button", onClick: () => openDetails(department.id), title: "View department details", className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground hover:border-border-strong hover:text-foreground", children: jsx.jsx(EditIcon, { className: "h-4 w-4" }) }) }),
                  ] }, department.id);
                }) }),
              ],
              }),
              jsx.jsxs("div", { className: "admin-table-footer", children: [
                jsx.jsx("span", { children: visible.length ? `Showing 1-${Math.min(visible.length, TABLE_PAGE_SIZE)} of ${visible.length} departments` : "Showing 0 of 0 departments" }),
                jsx.jsxs("div", { className: "admin-table-pagination", children: [jsx.jsx("button", { type: "button", "aria-label": "Previous page", children: jsx.jsx(ChevronRightIcon, { className: "audit-page-prev h-4 w-4" }) }), jsx.jsx("span", { children: `1 / ${Math.max(1, Math.ceil(visible.length / TABLE_PAGE_SIZE))}` }), jsx.jsx("button", { type: "button", "aria-label": "Next page", children: jsx.jsx(ChevronRightIcon, { className: "h-4 w-4" }) })] }),
              ] }),
            ],
          }),
        ],
      }),
      jsx.jsx(DepartmentDrawer, { open: drawerOpen, onOpenChange: setDrawerOpen, editingId: selectedId }),
    ],
  });
}

function DepartmentDrawer({ open, onOpenChange, editingId }) {
  const departments = useStore((state) => state.departments);
  const staff = useStore((state) => state.staff);
  const department = editingId ? departments.find((item) => item.id === editingId) : null;
  const [draft, setDraft] = React.useState({ code: "", name: "", description: "", headOfDepartmentId: null, status: "active" });
  const [editing, setEditing] = React.useState(false);
  const [confirmAction, setConfirmAction] = React.useState(null);
  const canEdit = true;
  React.useEffect(() => {
    setDraft({ code: department?.code ?? "", name: department?.name ?? "", description: department?.description ?? "", headOfDepartmentId: department?.headOfDepartmentId ?? null, status: department?.status ?? "active" });
    setEditing(!department);
    setConfirmAction(null);
  }, [department?.id, open]);
  if (!open) return null;
  const head = staff.find((person) => person.id === (department?.headOfDepartmentId ?? draft.headOfDepartmentId));
  const staffCount = department ? staff.filter((person) => person.departmentId === department.id).length : 0;
  const save = () => {
    if (department) {
      if (canEdit) actions.updateDepartment(department.id, draft);
      else actions.addApprovalRequest?.({ type: "department_update", departmentId: department.id, payload: draft });
      setEditing(false);
    } else {
      actions.addDepartment(draft);
      onOpenChange(false);
    }
  };
  const confirmDanger = () => {
    if (!department || !confirmAction) return;
    if (confirmAction.type === "delete") {
      actions.deleteDepartment?.(department.id);
      onOpenChange(false);
    } else {
      actions.setDepartmentStatus?.(department.id, confirmAction.next);
      setDraft((current) => ({ ...current, status: confirmAction.next }));
    }
    setConfirmAction(null);
  };
  const active = draft.status === "active";
  return jsx.jsxs("div", {
    className: "admin-detail-layer",
    children: [
      jsx.jsx("button", { type: "button", className: "admin-detail-backdrop", onClick: () => onOpenChange(false), "aria-label": "Close department details" }),
      jsx.jsxs("aside", { className: "admin-detail-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "department-detail-title", children: [
        jsx.jsxs("div", { className: "admin-detail-header", children: [
          jsx.jsxs("div", { className: "min-w-0 flex-1", children: [jsx.jsx("h2", { id: "department-detail-title", className: "truncate text-base font-semibold text-foreground", children: department ? department.name : "Add department" }), jsx.jsx("p", { className: "mt-0.5 text-sm text-muted-foreground", children: department ? department.description : "Create a department" })] }),
          jsx.jsxs("div", { className: "flex items-center gap-2", children: [
            department && !editing ? jsx.jsx("button", { type: "button", onClick: () => setEditing(true), className: "inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-3 text-xs font-medium text-foreground hover:bg-accent", children: [jsx.jsx(EditIcon, { className: "h-3.5 w-3.5" }), "Edit"] }) : null,
            jsx.jsx("button", { type: "button", onClick: () => onOpenChange(false), className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground hover:bg-accent hover:text-foreground", "aria-label": "Close department details", children: jsx.jsx(XIcon, { className: "h-4 w-4" }) }),
          ] }),
        ] }),
        editing ? jsx.jsxs(jsx.Fragment, { children: [
          jsx.jsxs("div", { className: "admin-detail-body", children: [
            jsx.jsx(Field, { label: "Code", children: jsx.jsx(Input, { value: draft.code, onChange: (value) => setDraft({ ...draft, code: value.toUpperCase() }), placeholder: "E.g. CARD" }) }),
            jsx.jsx(Field, { label: "Name", children: jsx.jsx(Input, { value: draft.name, onChange: (value) => setDraft({ ...draft, name: value }), placeholder: "Cardiology" }) }),
            jsx.jsx(Field, { label: "Description", children: jsx.jsx("textarea", { value: draft.description, onChange: (event) => setDraft({ ...draft, description: event.target.value }), rows: 3, className: "w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/40" }) }),
            jsx.jsx(Field, { label: "Head of Department", children: jsx.jsxs(Select, { value: draft.headOfDepartmentId ?? "none", onValueChange: (value) => setDraft({ ...draft, headOfDepartmentId: value === "none" ? null : value }), children: [jsx.jsx(SelectTrigger, { className: "bg-surface", children: jsx.jsx(SelectValue, {}) }), jsx.jsxs(SelectContent, { children: [jsx.jsx(SelectItem, { value: "none", children: "Unassigned" }), staff.filter((person) => person.status === "active").map((person) => jsx.jsx(SelectItem, { value: person.id, children: staffName(person) }, person.id))] })] }) }),
            department ? jsx.jsxs("section", { className: "danger-zone", children: [
              jsx.jsxs("div", { children: [jsx.jsx("h3", { className: "danger-zone-title", children: "Danger zone" }), jsx.jsx("p", { className: "danger-zone-copy", children: "Department availability and deletion require confirmation." })] }),
              jsx.jsxs("div", { className: "danger-row", children: [
                jsx.jsxs("div", { children: [jsx.jsx("div", { className: "danger-row-title", children: "Department active" }), jsx.jsx("p", { className: "danger-row-copy", children: active ? "This department is available for assignment." : "This department is inactive and hidden from active assignment." })] }),
                jsx.jsx("button", { type: "button", onClick: () => setConfirmAction({ type: "status", next: active ? "archived" : "active", title: active ? "Set department inactive" : "Set department active", body: active ? `Set ${department.name} inactive? Staff assignments remain, but it is removed from active workflows.` : `Restore ${department.name} to active workflows?`, action: active ? "Set inactive" : "Restore" }), className: active ? "danger-switch is-on" : "danger-switch", "aria-pressed": active, children: jsx.jsx("span", {}) }),
              ] }),
              jsx.jsxs("div", { className: "danger-row", children: [
                jsx.jsxs("div", { children: [jsx.jsx("div", { className: "danger-row-title", children: "Delete department" }), jsx.jsx("p", { className: "danger-row-copy", children: `${staffCount} staff assignments will become unassigned.` })] }),
                jsx.jsx("button", { type: "button", onClick: () => setConfirmAction({ type: "delete", title: "Delete department", body: `Delete ${department.name}? ${staffCount} staff assignments will become unassigned.`, action: "Delete" }), className: "danger-delete-button", children: "Delete" }),
              ] }),
            ] }) : null,
            jsx.jsxs("div", { className: "admin-inline-actions", children: [jsx.jsx("button", { onClick: () => department ? setEditing(false) : onOpenChange(false), className: "h-8 rounded-md border border-border bg-surface px-3 text-xs font-medium text-foreground hover:bg-accent", children: "Discard" }), jsx.jsx("button", { onClick: save, className: "h-8 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground hover:bg-primary/90", children: department ? canEdit ? "Save changes" : "Request approval" : "Create department" })] }),
          ] }),
        ] }) : jsx.jsxs(jsx.Fragment, { children: [
          jsx.jsxs("div", { className: "admin-detail-body", children: [
		            jsx.jsxs("div", { className: "overflow-hidden rounded-lg border border-border", children: [jsx.jsx(DetailRow, { label: "Code", value: department?.code }), jsx.jsx(DetailRow, { label: "Head", value: head ? staffName(head) : "Unassigned" }), jsx.jsx(DetailRow, { label: "Staff", value: staffCount }), jsx.jsx(DetailRow, { label: "Status", value: department?.status === "active" ? "Active" : "Inactive" })] }),
            jsx.jsx("p", { className: "rounded-lg border border-border bg-surface px-3 py-3 text-sm leading-6 text-muted-foreground", children: "Department changes are saved directly for owners. Limited administrators submit an approval request to a user with department-management access." }),
            jsx.jsxs("div", { className: "admin-inline-actions", children: [jsx.jsx("button", { onClick: () => onOpenChange(false), className: "h-8 rounded-md border border-border bg-surface px-3 text-xs font-medium text-foreground hover:bg-accent", children: "Close" }), jsx.jsx("button", { onClick: () => setEditing(true), className: "h-8 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground hover:bg-primary/90", children: "Edit" })] }),
          ] }),
        ] }),
        confirmAction ? jsx.jsx(DangerConfirm, { confirm: confirmAction, onCancel: () => setConfirmAction(null), onConfirm: confirmDanger }) : null,
      ] }),
    ],
  });
}

function DangerConfirm({ confirm, onCancel, onConfirm }) {
  return jsx.jsx("div", { className: "danger-confirm-layer", children: jsx.jsxs("div", { className: "danger-confirm-card", role: "alertdialog", "aria-modal": "true", children: [
    jsx.jsx("h3", { children: confirm.title }),
    jsx.jsx("p", { children: confirm.body }),
    jsx.jsxs("div", { className: "danger-confirm-actions", children: [
      jsx.jsx("button", { type: "button", onClick: onCancel, className: "h-8 rounded-md border border-border bg-surface px-3 text-xs font-medium text-foreground hover:bg-accent", children: "Cancel" }),
      jsx.jsx("button", { type: "button", onClick: onConfirm, className: confirm.type === "delete" ? "h-8 rounded-md bg-destructive px-3 text-xs font-medium text-destructive-foreground hover:bg-destructive/90" : "h-8 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground hover:bg-primary/90", children: confirm.action }),
    ] }),
  ] }) });
}

function DetailRow({ label, value }) {
  return jsx.jsxs("div", { className: "flex items-center justify-between gap-4 border-b border-border px-4 py-3 text-sm last:border-b-0", children: [jsx.jsx("span", { className: "text-muted-foreground", children: label }), jsx.jsx("span", { className: "text-right font-medium text-foreground", children: value })] });
}

function Field({ label, children }) {
  return jsx.jsxs("label", { className: "block space-y-1.5", children: [jsx.jsx("span", { className: "text-xs font-medium text-foreground", children: label }), children] });
}

function Input({ value, onChange, placeholder }) {
  return jsx.jsx("input", { value, onChange: (event) => onChange(event.target.value), placeholder, className: "h-9 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/40" });
}

export { DepartmentsPage as component };
