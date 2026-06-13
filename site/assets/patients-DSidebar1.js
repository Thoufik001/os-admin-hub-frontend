import {
  c as createIcon,
  u as useStore,
  r as React,
  j as jsx,
  A as AppShell,
  P as PageHeader,
  S as SearchIcon,
  U as UsersIcon,
  V as DepartmentIcon,
  n as ShieldIcon,
  t as formatRelativeTime,
  f as staffName,
  k as cn,
} from "./index-Df4dNtFP.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-9XonwzbX.js";
import { P as PlusIcon } from "./plus-C4qARnnh.js";
import "./index-CWQB4imr.js";
import "./index-NYxxxYXH.js";

const ChevronRightIcon = createIcon("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);

const XIcon = createIcon("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);

const EditIcon = createIcon("square-pen", [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "edit-1" }],
  ["path", { d: "M18.4 2.6a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4Z", key: "edit-2" }],
]);

const HeartPulseIcon = createIcon("heart-pulse", [
  ["path", { d: "M19.5 12.6 12 20l-7.5-7.4a5 5 0 0 1 7.1-7.1l.4.4.4-.4a5 5 0 0 1 7.1 7.1Z", key: "1xq96f" }],
  ["path", { d: "M3.5 12h3l1.5-3 2.5 6 1.5-3h4.5", key: "cw4q32" }],
]);

const CalendarIcon = createIcon("calendar-days", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);

const AlertIcon = createIcon("triangle-alert", [
  ["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", key: "wmoenq" }],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);

const FollowUpIcon = createIcon("rotate-cw", [
  ["path", { d: "M21 12a9 9 0 1 1-3-6.7", key: "1d0av9" }],
  ["path", { d: "M21 3v6h-6", key: "1q7to0" }],
]);

const LabIcon = createIcon("flask-conical", [
  ["path", { d: "M10 2v7.5L4.7 18a2 2 0 0 0 1.7 3h11.2a2 2 0 0 0 1.7-3L14 9.5V2", key: "19vv1j" }],
  ["path", { d: "M8.5 2h7", key: "1c79wa" }],
  ["path", { d: "M7 15h10", key: "1e2n3n" }],
]);

const CheckCircleIcon = createIcon("circle-check", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
const TABLE_PAGE_SIZE = 50;

const patients = [
  { id: "p1", mrn: "MRN-24031", name: "Aarav Mehta", age: 42, gender: "M", status: "in-care", department: "Cardiology", doctor: "Marcus Lee", nurse: "Ines Moreau", lastVisit: "2026-06-13T08:55:00+05:30", insurance: "Active", access: "Doctor, Nurse", reason: "Post angioplasty review" },
  { id: "p2", mrn: "MRN-24046", name: "Noor Khan", age: 28, gender: "F", status: "critical", department: "Emergency", doctor: "Ji-ho Park", nurse: "Sara Khan", lastVisit: "2026-06-13T08:21:00+05:30", insurance: "Pending", access: "Doctor only", reason: "Observation after trauma intake" },
  { id: "p3", mrn: "MRN-23988", name: "Elena Rossi", age: 61, gender: "F", status: "sent-lab", department: "Radiology", doctor: "Ahmed Farouk", nurse: "Priya Shah", lastVisit: "2026-06-12T18:05:00+05:30", insurance: "Active", access: "Doctor, Lab", reason: "MRI review and lab correlation" },
  { id: "p4", mrn: "MRN-24052", name: "Kavitha Rao", age: 35, gender: "F", status: "in-care", department: "Pediatrics", doctor: "Ines Moreau", nurse: "Sara Khan", lastVisit: "2026-06-13T07:34:00+05:30", insurance: "Active", access: "Doctor, Nurse", reason: "Parent consultation record" },
  { id: "p5", mrn: "MRN-24017", name: "Owen Fitzgerald", age: 73, gender: "M", status: "completed", department: "Pharmacy", doctor: "Naomi Tanaka", nurse: "Fatima Bensalem", lastVisit: "2026-06-12T12:11:00+05:30", insurance: "Active", access: "Doctor, Pharmacist", reason: "Medication reconciliation completed" },
  { id: "p6", mrn: "MRN-24061", name: "Lina Chen", age: 19, gender: "F", status: "scheduled", department: "General Medicine", doctor: "Sara Khan", nurse: "Deepa Nair", lastVisit: "2026-06-12T10:30:00+05:30", insurance: "Unverified", access: "Front Desk", reason: "New patient intake" },
  { id: "p7", mrn: "MRN-23974", name: "Raj Menon", age: 54, gender: "M", status: "follow-up", department: "Cardiology", doctor: "Marcus Lee", nurse: "Anita Rao", lastVisit: "2026-06-11T16:40:00+05:30", insurance: "Active", access: "Owner approval", reason: "Follow-up after sensitive access review" },
  { id: "p8", mrn: "MRN-24025", name: "Maya Thomas", age: 47, gender: "F", status: "follow-up", department: "Radiology", doctor: "Elena Rossi", nurse: "Priya Shah", lastVisit: "2026-06-12T09:45:00+05:30", insurance: "Active", access: "Doctor, Technician", reason: "Ultrasound follow-up" },
];

const statusLabels = {
  scheduled: "Scheduled",
  "in-care": "In care",
  critical: "Critical",
  "follow-up": "Follow-up",
  "sent-lab": "Sent for lab",
  completed: "Completed",
};

const statusIcons = {
  scheduled: CalendarIcon,
  "in-care": HeartPulseIcon,
  critical: AlertIcon,
  "follow-up": FollowUpIcon,
  "sent-lab": LabIcon,
  completed: CheckCircleIcon,
};

function initials(name) {
  return name.split(" ").map((part) => part[0]).join("").slice(0, 2);
}

function countBy(key, value) {
  return patients.filter((patient) => patient[key] === value).length;
}

function PatientStatus({ status }) {
  const Icon = statusIcons[status] ?? CalendarIcon;
  return jsx.jsxs("span", {
    className: `patient-status patient-status-${status}`,
    children: [jsx.jsx(Icon, { className: "patient-status-icon" }), statusLabels[status]],
  });
}

function PersonCell({ name }) {
  return jsx.jsxs("div", {
    className: "patient-person",
    children: [
      jsx.jsx("span", { className: "patient-provider-avatar", children: initials(name) }),
      jsx.jsx("span", { className: "truncate text-foreground", children: name }),
    ],
  });
}

function MetricCard({ label, value, hint, tone, icon: Icon }) {
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

function PatientPage() {
  const [patientRecords, setPatientRecords] = React.useState(patients);
  const [query, setQuery] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [departmentFilter, setDepartmentFilter] = React.useState("all");
  const [sortBy, setSortBy] = React.useState("lastVisit");
  const [selectedId, setSelectedId] = React.useState(patients[0].id);
  const [detailOpen, setDetailOpen] = React.useState(false);
  const departments = React.useMemo(() => [...new Set(patientRecords.map((patient) => patient.department))].sort(), [patientRecords]);
  const filtered = React.useMemo(() => {
    const needle = query.trim().toLowerCase();
    return patientRecords
      .filter((patient) => {
        const matchesQuery = !needle || `${patient.name} ${patient.mrn} ${patient.doctor} ${patient.nurse} ${patient.department}`.toLowerCase().includes(needle);
        const matchesStatus = statusFilter === "all" || patient.status === statusFilter;
        const matchesDepartment = departmentFilter === "all" || patient.department === departmentFilter;
        return matchesQuery && matchesStatus && matchesDepartment;
      })
      .sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        if (sortBy === "department") return a.department.localeCompare(b.department) || a.name.localeCompare(b.name);
        if (sortBy === "doctor") return a.doctor.localeCompare(b.doctor) || a.name.localeCompare(b.name);
        return new Date(b.lastVisit).getTime() - new Date(a.lastVisit).getTime();
      });
  }, [patientRecords, query, statusFilter, departmentFilter, sortBy]);
  const tableRows = filtered.slice(0, TABLE_PAGE_SIZE);
  React.useEffect(() => {
    if (filtered.length > 0 && !filtered.some((patient) => patient.id === selectedId)) {
      setSelectedId(filtered[0].id);
    }
  }, [filtered, selectedId]);
  const selected = patientRecords.find((patient) => patient.id === selectedId) ?? filtered[0] ?? patientRecords[0];
  const openPatient = (patient) => {
    setSelectedId(patient.id);
    setDetailOpen(true);
  };
  React.useEffect(() => {
    const handlePatientOpen = (event) => {
      const trigger = event.target.closest?.("[data-patient-detail-id]");
      if (!trigger) return;
      const patient = patientRecords.find((item) => item.id === trigger.getAttribute("data-patient-detail-id"));
      if (!patient) return;
      setSelectedId(patient.id);
      setDetailOpen(true);
    };
    document.addEventListener("click", handlePatientOpen, true);
    return () => document.removeEventListener("click", handlePatientOpen, true);
  }, [patientRecords]);

  return jsx.jsxs(AppShell, {
    children: [
      jsx.jsx(PageHeader, {
        title: "Patients",
        description: "Manage patient records, visits, care status, and access-sensitive clinical data.",
        actions: jsx.jsxs("button", {
          type: "button",
          className: "inline-flex h-8 items-center gap-1.5 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground hover:bg-primary/90",
          children: [jsx.jsx(PlusIcon, { className: "h-3.5 w-3.5" }), "New patient"],
        }),
      }),
      jsx.jsxs("div", {
        className: "patients-page space-y-5 px-8 py-6",
        children: [
          jsx.jsxs("div", {
            className: "orbac-metrics-grid patient-metrics-grid",
            children: [
              jsx.jsx(MetricCard, { label: "Patients", value: patientRecords.length, hint: "Active records", tone: "rules", icon: UsersIcon }),
              jsx.jsx(MetricCard, { label: "In care", value: patientRecords.filter((patient) => patient.status === "in-care").length, hint: "Assigned now", tone: "roles", icon: HeartPulseIcon }),
              jsx.jsx(MetricCard, { label: "Critical", value: patientRecords.filter((patient) => patient.status === "critical").length, hint: "Needs review", tone: "actions", icon: ShieldIcon }),
              jsx.jsx(MetricCard, { label: "Scheduled", value: patientRecords.filter((patient) => patient.status === "scheduled").length, hint: "Upcoming visits", tone: "objects", icon: DepartmentIcon }),
            ],
          }),
          jsx.jsxs("section", {
            className: "patient-layout space-y-4",
            children: [
              jsx.jsxs("div", {
                className: "filter-toolbar flex flex-wrap items-center gap-2",
                children: [
                  jsx.jsxs("div", {
                    className: "relative w-72",
                    children: [
                      jsx.jsx(SearchIcon, { className: "pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" }),
                      jsx.jsx("input", {
                        value: query,
                        onChange: (event) => setQuery(event.target.value),
                        placeholder: "Search patients, MRN, doctor, or nurse",
                        className: "h-8 w-full rounded-md border border-border bg-surface pl-8 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/40",
                      }),
                    ],
                  }),
                  jsx.jsxs(Select, {
                    value: statusFilter,
                    onValueChange: setStatusFilter,
                    children: [
                      jsx.jsx(SelectTrigger, {
                        className: "h-8 w-[170px] bg-surface text-xs",
                        children: jsx.jsx(SelectValue, { placeholder: "Status" }),
                      }),
                      jsx.jsxs(SelectContent, {
                        children: [
                          jsx.jsx(SelectItem, { value: "all", children: `All (${patientRecords.length})` }),
                          Object.entries(statusLabels).map(([value, label]) => jsx.jsx(SelectItem, { value, children: `${label} (${patientRecords.filter((patient) => patient.status === value).length})` }, value)),
                        ],
                      }),
                    ],
                  }),
                  jsx.jsxs(Select, {
                    value: departmentFilter,
                    onValueChange: setDepartmentFilter,
                    children: [
                      jsx.jsx(SelectTrigger, {
                        className: "h-8 w-[190px] bg-surface text-xs",
                        children: jsx.jsx(SelectValue, { placeholder: "Department" }),
                      }),
                      jsx.jsxs(SelectContent, {
                        children: [
                          jsx.jsx(SelectItem, { value: "all", children: `All departments (${patientRecords.length})` }),
                          departments.map((department) => jsx.jsx(SelectItem, { value: department, children: `${department} (${patientRecords.filter((patient) => patient.department === department).length})` }, department)),
                        ],
                      }),
                    ],
                  }),
                  jsx.jsxs(Select, {
                    value: sortBy,
                    onValueChange: setSortBy,
                    children: [
                      jsx.jsx(SelectTrigger, {
                        className: "h-8 w-[170px] bg-surface text-xs",
                        children: jsx.jsx(SelectValue, { placeholder: "Sort" }),
                      }),
                      jsx.jsxs(SelectContent, {
                        children: [
                          jsx.jsx(SelectItem, { value: "lastVisit", children: "Sort: Recent" }),
                          jsx.jsx(SelectItem, { value: "name", children: "Sort: Name" }),
                          jsx.jsx(SelectItem, { value: "department", children: "Sort: Department" }),
                          jsx.jsx(SelectItem, { value: "doctor", children: "Sort: Doctor" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              jsx.jsx("div", {
                className: "overflow-x-auto rounded-xl border border-border bg-card",
                children: jsx.jsxs(React.Fragment, {
                  children: [
                    jsx.jsxs("table", {
                      className: "patient-table w-full text-sm",
                      children: [
                        jsx.jsx("thead", {
                          children: jsx.jsxs("tr", {
                            className: "border-b border-border bg-surface/50 text-left text-xs uppercase tracking-wider text-muted-foreground",
                            children: [
                              jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Patient" }),
                              jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Department" }),
                              jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Doctor" }),
                              jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Nurse" }),
                              jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Status" }),
                              jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Last visit" }),
                              jsx.jsx("th", { className: "px-4 py-2.5 font-medium" }),
                            ],
                          }),
                        }),
                        jsx.jsx("tbody", {
                          className: "divide-y divide-border",
                          children: filtered.length === 0
                            ? jsx.jsx("tr", { children: jsx.jsx("td", { colSpan: 7, className: "px-4 py-10 text-center text-sm text-muted-foreground", children: "No patients match the current filters." }) })
                            : tableRows.map((patient) => jsx.jsxs("tr", {
                                onClick: () => openPatient(patient),
                                "data-patient-detail-id": patient.id,
                                className: cn("cursor-pointer hover:bg-surface/60", detailOpen && selected.id === patient.id && "bg-accent/70"),
                                children: [
                                  jsx.jsx("td", {
                                    className: "px-4 py-3",
                                    children: jsx.jsxs("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        jsx.jsx("div", { className: "patient-avatar", children: initials(patient.name) }),
                                        jsx.jsxs("div", { className: "min-w-0", children: [jsx.jsx("div", { className: "truncate font-medium text-foreground", children: patient.name }), jsx.jsxs("div", { className: "truncate text-xs text-muted-foreground", children: [patient.mrn, " · ", patient.age, patient.gender] })] }),
                                      ],
                                    }),
                                  }),
                                  jsx.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: patient.department }),
                                  jsx.jsx("td", { className: "px-4 py-3", children: jsx.jsx(PersonCell, { name: patient.doctor }) }),
                                  jsx.jsx("td", { className: "px-4 py-3", children: jsx.jsx(PersonCell, { name: patient.nurse }) }),
                                  jsx.jsx("td", { className: "px-4 py-3", children: jsx.jsx(PatientStatus, { status: patient.status }) }),
                                  jsx.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground", children: formatRelativeTime(patient.lastVisit) }),
                                  jsx.jsx("td", {
                                    className: "px-4 py-3 text-right",
                                    children: jsx.jsx("button", {
                                      type: "button",
                                      title: "View patient",
                                      "data-patient-detail-id": patient.id,
                                      onClick: (event) => {
                                        event.stopPropagation();
                                        openPatient(patient);
                                      },
                                      className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground hover:border-border-strong hover:text-foreground",
                                      children: jsx.jsx(ChevronRightIcon, { className: "h-4 w-4" }),
                                    }),
                                  }),
                                ],
                              }, patient.id)),
                        }),
                      ],
                    }),
                    jsx.jsxs("div", {
                      className: "admin-table-footer",
                      children: [
                        jsx.jsx("span", { children: filtered.length ? `Showing 1-${Math.min(filtered.length, TABLE_PAGE_SIZE)} of ${filtered.length} patients` : "Showing 0 of 0 patients" }),
                        jsx.jsxs("div", { className: "admin-table-pagination", children: [jsx.jsx("button", { type: "button", "aria-label": "Previous page", children: jsx.jsx(ChevronRightIcon, { className: "audit-page-prev h-4 w-4" }) }), jsx.jsx("span", { children: `1 / ${Math.max(1, Math.ceil(filtered.length / TABLE_PAGE_SIZE))}` }), jsx.jsx("button", { type: "button", "aria-label": "Next page", children: jsx.jsx(ChevronRightIcon, { className: "h-4 w-4" }) })] }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      jsx.jsx(PatientDetailSheet, { patient: selected, open: detailOpen, onOpenChange: setDetailOpen, onSave: (nextPatient) => setPatientRecords((records) => records.map((record) => record.id === nextPatient.id ? nextPatient : record)), onDelete: (patientId) => setPatientRecords((records) => records.filter((record) => record.id !== patientId)) }),
    ],
  });
}

function PatientDetailSheet({ patient, open, onOpenChange, onSave, onDelete }) {
  const staff = useStore((state) => state.staff);
  const roles = useStore((state) => state.roles);
  const systemDepartments = useStore((state) => state.departments);
  const [editing, setEditing] = React.useState(false);
  const [draft, setDraft] = React.useState(patient);
  const [confirmAction, setConfirmAction] = React.useState(null);
  React.useEffect(() => {
    setDraft(patient);
    setEditing(false);
    setConfirmAction(null);
  }, [patient?.id, open]);
  if (!patient) return null;
  const activeStaff = staff.filter((person) => person.status === "active");
  const roleNameById = new Map(roles.map((role) => [role.id, role.name]));
  const hasRole = (person, needle) => person.roleIds.some((roleId) => (roleNameById.get(roleId) ?? "").toLowerCase().includes(needle));
  const doctorOptions = activeStaff.filter((person) => hasRole(person, "doctor"));
  const nurseOptions = activeStaff.filter((person) => hasRole(person, "nurse"));
  const departmentOptions = [...new Set([
    ...systemDepartments.filter((department) => department.status === "active").map((department) => department.name),
    ...patients.map((record) => record.department),
  ])].sort();
  const updateDraft = (key, value) => setDraft((current) => ({ ...current, [key]: value }));
  const save = () => {
    onSave(draft);
    setEditing(false);
  };
  const confirmDanger = () => {
    if (!confirmAction) return;
    if (confirmAction.type === "delete") {
      onDelete?.(patient.id);
      onOpenChange(false);
    } else {
      const nextPatient = { ...draft, recordActive: confirmAction.next };
      setDraft(nextPatient);
      onSave(nextPatient);
    }
    setConfirmAction(null);
  };
  const recordActive = draft?.recordActive !== false;
  return open
    ? jsx.jsxs("div", {
      className: "admin-detail-layer",
      children: [
        jsx.jsx("button", { type: "button", className: "admin-detail-backdrop", onClick: () => onOpenChange(false), "aria-label": "Close patient details" }),
        jsx.jsxs("aside", {
          className: "admin-detail-sheet",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "patient-detail-title",
          children: [
            jsx.jsxs("div", {
              className: "admin-detail-header",
              children: [
                jsx.jsxs("div", {
                  className: "flex min-w-0 items-start gap-3",
                  children: [
                    jsx.jsx("div", { className: "patient-avatar patient-detail-avatar", children: initials(patient.name) }),
                    jsx.jsxs("div", { className: "min-w-0 flex-1", children: [jsx.jsx("h2", { id: "patient-detail-title", className: "truncate text-base font-semibold text-foreground", children: patient.name }), jsx.jsx("p", { className: "mt-0.5 text-sm text-muted-foreground", children: patient.mrn })] }),
                  ],
                }),
                jsx.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    jsx.jsx(PatientStatus, { status: patient.status }),
                    !editing ? jsx.jsx("button", { type: "button", onClick: () => setEditing(true), className: "inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-3 text-xs font-medium text-foreground hover:bg-accent", children: [jsx.jsx(EditIcon, { className: "h-3.5 w-3.5" }), "Edit"] }) : null,
                    jsx.jsx("button", { type: "button", onClick: () => onOpenChange(false), className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground hover:bg-accent hover:text-foreground", "aria-label": "Close patient details", children: jsx.jsx(XIcon, { className: "h-4 w-4" }) }),
                  ],
                }),
              ],
            }),
            editing
              ? jsx.jsxs(React.Fragment, {
                children: [
                  jsx.jsxs("div", {
                    className: "admin-detail-body",
                    children: [
                      jsx.jsx(EditableField, { label: "Name", value: draft.name, onChange: (value) => updateDraft("name", value) }),
                      jsx.jsxs("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                          jsx.jsx(EditableField, { label: "Age", value: String(draft.age ?? ""), onChange: (value) => updateDraft("age", value.replace(/\D/g, "")) }),
                          jsx.jsx(SelectField, {
                            label: "Gender",
                            value: draft.gender ?? "M",
                            onValueChange: (value) => updateDraft("gender", value),
                            children: [
                              jsx.jsx(SelectItem, { value: "M", children: "Male" }),
                              jsx.jsx(SelectItem, { value: "F", children: "Female" }),
                              jsx.jsx(SelectItem, { value: "O", children: "Other" }),
                            ],
                          }),
                        ],
                      }),
                      jsx.jsx(SelectField, {
                        label: "Department",
                        value: draft.department,
                        onValueChange: (value) => updateDraft("department", value),
                        children: departmentOptions.map((department) => jsx.jsx(SelectItem, { value: department, children: department }, department)),
                      }),
                      jsx.jsx(StaffSearchField, { label: "Doctor", value: draft.doctor, options: doctorOptions.length ? doctorOptions : activeStaff, placeholder: "Search doctor by name", onChange: (value) => updateDraft("doctor", value) }),
                      jsx.jsx(StaffSearchField, { label: "Nurse", value: draft.nurse, options: nurseOptions.length ? nurseOptions : activeStaff, placeholder: "Search nurse by name", onChange: (value) => updateDraft("nurse", value) }),
                      jsx.jsx(SelectField, {
                        label: "Status",
                        value: draft.status,
                        onValueChange: (value) => updateDraft("status", value),
                        children: Object.entries(statusLabels).map(([value, label]) => jsx.jsx(SelectItem, { value, children: label }, value)),
                      }),
                      jsx.jsx("label", {
                        className: "block space-y-1.5",
                        children: [
                          jsx.jsx("span", { className: "text-xs font-medium text-foreground", children: "Reason" }),
                          jsx.jsx("textarea", { value: draft.reason, onChange: (event) => updateDraft("reason", event.target.value), rows: 4, className: "w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/40" }),
                        ],
                      }),
                      jsx.jsxs("section", {
                        className: "danger-zone",
                        children: [
                          jsx.jsxs("div", { children: [jsx.jsx("h3", { className: "danger-zone-title", children: "Danger zone" }), jsx.jsx("p", { className: "danger-zone-copy", children: "Record access and deletion require confirmation." })] }),
                          jsx.jsxs("div", {
                            className: "danger-row",
                            children: [
                              jsx.jsxs("div", { children: [jsx.jsx("div", { className: "danger-row-title", children: "Record active" }), jsx.jsx("p", { className: "danger-row-copy", children: recordActive ? "This patient record is visible in patient workflows." : "This patient record is hidden from active workflows." })] }),
                              jsx.jsx("button", { type: "button", onClick: () => setConfirmAction({ type: "status", next: !recordActive, title: recordActive ? "Deactivate record" : "Activate record", body: recordActive ? `Deactivate ${patient.name}'s patient record?` : `Reactivate ${patient.name}'s patient record?`, action: recordActive ? "Deactivate" : "Activate" }), className: recordActive ? "danger-switch is-on" : "danger-switch", "aria-pressed": recordActive, children: jsx.jsx("span", {}) }),
                            ],
                          }),
                          jsx.jsxs("div", {
                            className: "danger-row",
                            children: [
                              jsx.jsxs("div", { children: [jsx.jsx("div", { className: "danger-row-title", children: "Delete patient" }), jsx.jsx("p", { className: "danger-row-copy", children: "Remove this patient record from the prototype." })] }),
                              jsx.jsx("button", { type: "button", onClick: () => setConfirmAction({ type: "delete", title: "Delete patient", body: `Delete ${patient.name}? This removes the patient record from the prototype.`, action: "Delete" }), className: "danger-delete-button", children: "Delete" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  jsx.jsxs("div", {
                    className: "admin-detail-footer",
                    children: [
                      jsx.jsx("button", { onClick: () => { setDraft(patient); setEditing(false); }, className: "h-8 rounded-md border border-border bg-surface px-3 text-xs font-medium text-foreground hover:bg-accent", children: "Discard" }),
                      jsx.jsx("button", { onClick: save, className: "h-8 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground hover:bg-primary/90", children: "Save changes" }),
                    ],
                  }),
                ],
              })
              : jsx.jsxs(React.Fragment, {
                children: [
                  jsx.jsxs("div", {
                    className: "admin-detail-body",
                    children: [
                      jsx.jsx("p", { className: "rounded-lg border border-border bg-surface px-3 py-3 text-sm leading-6 text-muted-foreground", children: patient.reason }),
                      jsx.jsxs("div", {
                        className: "overflow-hidden rounded-lg border border-border",
                        children: [
                          jsx.jsx(DetailRow, { label: "Doctor", value: patient.doctor }),
                          jsx.jsx(DetailRow, { label: "Nurse", value: patient.nurse }),
                          jsx.jsx(DetailRow, { label: "Age", value: patient.age }),
                          jsx.jsx(DetailRow, { label: "Gender", value: patient.gender === "M" ? "Male" : patient.gender === "F" ? "Female" : "Other" }),
                          jsx.jsx(DetailRow, { label: "Department", value: patient.department }),
                          jsx.jsx(DetailRow, { label: "Last visit", value: formatRelativeTime(patient.lastVisit) }),
                          jsx.jsx(DetailRow, { label: "Insurance", value: patient.insurance }),
                          jsx.jsx(DetailRow, { label: "Access scope", value: patient.access }),
                        ],
                      }),
                      jsx.jsxs("div", {
                        className: "rounded-lg border border-border bg-surface px-3 py-3",
                        children: [
                          jsx.jsx("h3", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: "Access notes" }),
                          jsx.jsx("p", { className: "mt-2 text-sm leading-6 text-muted-foreground", children: "Patient records should respect PATIENT_VIEW permissions in the role matrix. Limited access can expose demographics while hiding clinical notes." }),
                        ],
                      }),
                    ],
                  }),
                  jsx.jsxs("div", {
                    className: "admin-detail-footer",
                    children: [
                      jsx.jsx("button", { onClick: () => onOpenChange(false), className: "h-8 rounded-md border border-border bg-surface px-3 text-xs font-medium text-foreground hover:bg-accent", children: "Close" }),
                      jsx.jsx("button", { onClick: () => setEditing(true), className: "h-8 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground hover:bg-primary/90", children: "Edit" }),
                    ],
                  }),
                ],
              }),
            confirmAction ? jsx.jsx(DangerConfirm, { confirm: confirmAction, onCancel: () => setConfirmAction(null), onConfirm: confirmDanger }) : null,
          ],
        }),
      ],
    })
    : null;
}

function DangerConfirm({ confirm, onCancel, onConfirm }) {
  return jsx.jsx("div", {
    className: "danger-confirm-layer",
    children: jsx.jsxs("div", {
      className: "danger-confirm-card",
      role: "alertdialog",
      "aria-modal": "true",
      children: [
        jsx.jsx("h3", { children: confirm.title }),
        jsx.jsx("p", { children: confirm.body }),
        jsx.jsxs("div", {
          className: "danger-confirm-actions",
          children: [
            jsx.jsx("button", { type: "button", onClick: onCancel, className: "h-8 rounded-md border border-border bg-surface px-3 text-xs font-medium text-foreground hover:bg-accent", children: "Cancel" }),
            jsx.jsx("button", { type: "button", onClick: onConfirm, className: confirm.type === "delete" ? "h-8 rounded-md bg-destructive px-3 text-xs font-medium text-destructive-foreground hover:bg-destructive/90" : "h-8 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground hover:bg-primary/90", children: confirm.action }),
          ],
        }),
      ],
    }),
  });
}

function SelectField({ label, value, onValueChange, children }) {
  return jsx.jsxs("label", {
    className: "block space-y-1.5",
    children: [
      jsx.jsx("span", { className: "text-xs font-medium text-foreground", children: label }),
      jsx.jsxs(Select, {
        value,
        onValueChange,
        children: [
          jsx.jsx(SelectTrigger, {
            className: "h-9 w-full bg-surface text-sm",
            children: jsx.jsx(SelectValue, { placeholder: label }),
          }),
          jsx.jsx(SelectContent, { children }),
        ],
      }),
    ],
  });
}

function StaffSearchField({ label, value, options, placeholder, onChange }) {
  const [query, setQuery] = React.useState(value ?? "");
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    setQuery(value ?? "");
  }, [value]);
  const matches = options
    .filter((person) => {
      const name = staffName(person);
      const needle = query.trim().toLowerCase();
      return !needle || `${name} ${person.username}`.toLowerCase().includes(needle);
    })
    .slice(0, 7);
  const selectPerson = (person) => {
    const name = staffName(person);
    setQuery(name);
    onChange(name);
    setOpen(false);
  };
  return jsx.jsxs("label", {
    className: "block space-y-1.5",
    children: [
      jsx.jsx("span", { className: "text-xs font-medium text-foreground", children: label }),
      jsx.jsxs("div", {
        className: "patient-combobox",
        children: [
          jsx.jsx("input", {
            value: query,
            onFocus: () => setOpen(true),
            onBlur: () => window.setTimeout(() => setOpen(false), 120),
            onChange: (event) => {
              setQuery(event.target.value);
              onChange(event.target.value);
              setOpen(true);
            },
            placeholder,
            className: "patient-combobox-input",
          }),
          open
            ? jsx.jsx("div", {
              className: "patient-combobox-menu",
              role: "listbox",
              children: matches.length
                ? matches.map((person) => jsx.jsxs("button", {
                  type: "button",
                  className: "patient-combobox-option",
                  onMouseDown: (event) => event.preventDefault(),
                  onClick: () => selectPerson(person),
                  children: [
                    jsx.jsx("span", { className: "patient-combobox-avatar", children: initials(staffName(person)) }),
                    jsx.jsxs("span", { className: "min-w-0", children: [jsx.jsx("span", { className: "block truncate text-sm font-medium text-foreground", children: staffName(person) }), jsx.jsx("span", { className: "block truncate text-xs text-muted-foreground", children: `@${person.username}` })] }),
                  ],
                }, person.id))
                : jsx.jsx("div", { className: "patient-combobox-empty", children: "No matching staff" }),
            })
            : null,
        ],
      }),
    ],
  });
}

function EditableField({ label, value, onChange }) {
  return jsx.jsxs("label", {
    className: "block space-y-1.5",
    children: [
      jsx.jsx("span", { className: "text-xs font-medium text-foreground", children: label }),
      jsx.jsx("input", { value, onChange: (event) => onChange(event.target.value), className: "h-9 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/40" }),
    ],
  });
}

function DetailRow({ label, value }) {
  return jsx.jsxs("div", {
    className: "flex items-center justify-between gap-4 border-b border-border px-4 py-3 text-sm last:border-b-0",
    children: [jsx.jsx("span", { className: "text-muted-foreground", children: label }), jsx.jsx("span", { className: "text-right font-medium text-foreground", children: value })],
  });
}

export { PatientPage as component };
