import {
  c as createIcon,
  r as React,
  j as jsx,
  A as AppShell,
  P as PageHeader,
  S as SearchIcon,
  U as UsersIcon,
  V as DepartmentIcon,
  n as ShieldIcon,
  t as formatRelativeTime,
  k as cn,
} from "./index-Df4dNtFP.js";
import { P as PlusIcon } from "./plus-C4qARnnh.js";
import "./index-CWQB4imr.js";

const EditIcon = createIcon("square-pen", [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z", key: "ohrbg2" }],
]);

const HeartPulseIcon = createIcon("heart-pulse", [
  ["path", { d: "M19.5 12.6 12 20l-7.5-7.4a5 5 0 0 1 7.1-7.1l.4.4.4-.4a5 5 0 0 1 7.1 7.1Z", key: "1xq96f" }],
  ["path", { d: "M3.5 12h3l1.5-3 2.5 6 1.5-3h4.5", key: "cw4q32" }],
]);

const patients = [
  { id: "p1", mrn: "MRN-24031", name: "Aarav Mehta", age: 42, gender: "M", status: "in-care", risk: "medium", department: "Cardiology", clinician: "Marcus Lee", lastEncounter: "2026-06-13T08:55:00+05:30", insurance: "Active", access: "Doctor, Nurse", reason: "Post angioplasty review" },
  { id: "p2", mrn: "MRN-24046", name: "Noor Khan", age: 28, gender: "F", status: "critical", risk: "high", department: "Emergency", clinician: "Ji-ho Park", lastEncounter: "2026-06-13T08:21:00+05:30", insurance: "Pending", access: "Doctor only", reason: "Observation after trauma intake" },
  { id: "p3", mrn: "MRN-23988", name: "Elena Rossi", age: 61, gender: "F", status: "follow-up", risk: "low", department: "Radiology", clinician: "Ahmed Farouk", lastEncounter: "2026-06-12T18:05:00+05:30", insurance: "Active", access: "Doctor, Lab", reason: "MRI review" },
  { id: "p4", mrn: "MRN-24052", name: "Kavitha Rao", age: 35, gender: "F", status: "in-care", risk: "medium", department: "Pediatrics", clinician: "Ines Moreau", lastEncounter: "2026-06-13T07:34:00+05:30", insurance: "Active", access: "Doctor, Nurse", reason: "Parent consultation record" },
  { id: "p5", mrn: "MRN-24017", name: "Owen Fitzgerald", age: 73, gender: "M", status: "discharge", risk: "low", department: "Pharmacy", clinician: "Naomi Tanaka", lastEncounter: "2026-06-12T12:11:00+05:30", insurance: "Active", access: "Doctor, Pharmacist", reason: "Medication reconciliation" },
  { id: "p6", mrn: "MRN-24061", name: "Lina Chen", age: 19, gender: "F", status: "scheduled", risk: "low", department: "General Medicine", clinician: "Sara Khan", lastEncounter: "2026-06-14T10:30:00+05:30", insurance: "Unverified", access: "Front Desk", reason: "New patient intake" },
  { id: "p7", mrn: "MRN-23974", name: "Raj Menon", age: 54, gender: "M", status: "restricted", risk: "high", department: "Cardiology", clinician: "Marcus Lee", lastEncounter: "2026-06-11T16:40:00+05:30", insurance: "Active", access: "Owner approval", reason: "Sensitive access review" },
  { id: "p8", mrn: "MRN-24025", name: "Maya Thomas", age: 47, gender: "F", status: "follow-up", risk: "medium", department: "Radiology", clinician: "Elena Rossi", lastEncounter: "2026-06-12T09:45:00+05:30", insurance: "Active", access: "Doctor, Technician", reason: "Ultrasound follow-up" },
];

const statusLabels = {
  "in-care": "In care",
  critical: "Critical",
  "follow-up": "Follow-up",
  discharge: "Discharge",
  scheduled: "Scheduled",
  restricted: "Restricted",
};

const riskLabels = {
  high: "High risk",
  medium: "Medium",
  low: "Low",
};

function countBy(key, value) {
  return patients.filter((patient) => patient[key] === value).length;
}

function PatientStatus({ status }) {
  return jsx.jsxs("span", {
    className: `patient-status patient-status-${status}`,
    children: [jsx.jsx("span", { className: "patient-status-dot" }), statusLabels[status]],
  });
}

function RiskPill({ risk }) {
  return jsx.jsx("span", { className: `patient-risk patient-risk-${risk}`, children: riskLabels[risk] });
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
  const [query, setQuery] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [departmentFilter, setDepartmentFilter] = React.useState("all");
  const [sortBy, setSortBy] = React.useState("lastEncounter");
  const [selectedId, setSelectedId] = React.useState(patients[0].id);
  const departments = React.useMemo(() => [...new Set(patients.map((patient) => patient.department))].sort(), []);
  const filtered = React.useMemo(() => {
    const needle = query.trim().toLowerCase();
    return patients
      .filter((patient) => {
        const matchesQuery = !needle || `${patient.name} ${patient.mrn} ${patient.clinician} ${patient.department}`.toLowerCase().includes(needle);
        const matchesStatus = statusFilter === "all" || patient.status === statusFilter;
        const matchesDepartment = departmentFilter === "all" || patient.department === departmentFilter;
        return matchesQuery && matchesStatus && matchesDepartment;
      })
      .sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        if (sortBy === "department") return a.department.localeCompare(b.department) || a.name.localeCompare(b.name);
        if (sortBy === "risk") return ["high", "medium", "low"].indexOf(a.risk) - ["high", "medium", "low"].indexOf(b.risk);
        return new Date(b.lastEncounter).getTime() - new Date(a.lastEncounter).getTime();
      });
  }, [query, statusFilter, departmentFilter, sortBy]);
  React.useEffect(() => {
    if (filtered.length > 0 && !filtered.some((patient) => patient.id === selectedId)) {
      setSelectedId(filtered[0].id);
    }
  }, [filtered, selectedId]);
  const selected = patients.find((patient) => patient.id === selectedId) ?? filtered[0] ?? patients[0];

  return jsx.jsxs(AppShell, {
    children: [
      jsx.jsx(PageHeader, {
        title: "Patients",
        description: "Manage patient records, care status, and access-sensitive clinical data.",
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
              jsx.jsx(MetricCard, { label: "Patients", value: patients.length, hint: "Active records", tone: "rules", icon: UsersIcon }),
              jsx.jsx(MetricCard, { label: "In care", value: countBy("status", "in-care"), hint: "Currently assigned", tone: "roles", icon: HeartPulseIcon }),
              jsx.jsx(MetricCard, { label: "Critical", value: countBy("status", "critical"), hint: "Needs review", tone: "actions", icon: ShieldIcon }),
              jsx.jsx(MetricCard, { label: "Discharge", value: countBy("status", "discharge"), hint: "Pending closure", tone: "objects", icon: DepartmentIcon }),
            ],
          }),
          jsx.jsxs("div", {
            className: "patient-layout",
            children: [
              jsx.jsxs("section", {
                className: "min-w-0 space-y-4",
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
                            placeholder: "Search patients or MRN",
                            className: "h-8 w-full rounded-md border border-border bg-surface pl-8 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/40",
                          }),
                        ],
                      }),
                      jsx.jsxs("select", {
                        value: statusFilter,
                        onChange: (event) => setStatusFilter(event.target.value),
                        className: "app-filter-select h-8 w-[170px] rounded-md border border-border bg-surface px-3 pr-9 text-xs text-foreground focus:outline-none",
                        children: [
                          jsx.jsx("option", { value: "all", children: `All (${patients.length})` }),
                          jsx.jsx("option", { value: "in-care", children: `In care (${countBy("status", "in-care")})` }),
                          jsx.jsx("option", { value: "critical", children: `Critical (${countBy("status", "critical")})` }),
                          jsx.jsx("option", { value: "follow-up", children: `Follow-up (${countBy("status", "follow-up")})` }),
                          jsx.jsx("option", { value: "scheduled", children: `Scheduled (${countBy("status", "scheduled")})` }),
                          jsx.jsx("option", { value: "restricted", children: `Restricted (${countBy("status", "restricted")})` }),
                        ],
                      }),
                      jsx.jsxs("select", {
                        value: departmentFilter,
                        onChange: (event) => setDepartmentFilter(event.target.value),
                        className: "app-filter-select h-8 w-[190px] rounded-md border border-border bg-surface px-3 pr-9 text-xs text-foreground focus:outline-none",
                        children: [
                          jsx.jsx("option", { value: "all", children: `All departments (${patients.length})` }),
                          departments.map((department) => jsx.jsx("option", { value: department, children: `${department} (${patients.filter((patient) => patient.department === department).length})` }, department)),
                        ],
                      }),
                      jsx.jsxs("select", {
                        value: sortBy,
                        onChange: (event) => setSortBy(event.target.value),
                        className: "app-filter-select h-8 w-[170px] rounded-md border border-border bg-surface px-3 pr-9 text-xs text-foreground focus:outline-none",
                        children: [
                          jsx.jsx("option", { value: "lastEncounter", children: "Sort: Recent" }),
                          jsx.jsx("option", { value: "name", children: "Sort: Name" }),
                          jsx.jsx("option", { value: "department", children: "Sort: Department" }),
                          jsx.jsx("option", { value: "risk", children: "Sort: Risk" }),
                        ],
                      }),
                    ],
                  }),
                  jsx.jsx("div", {
                    className: "overflow-hidden rounded-xl border border-border bg-card",
                    children: jsx.jsxs("table", {
                      className: "patient-table w-full text-sm",
                      children: [
                        jsx.jsx("thead", {
                          children: jsx.jsxs("tr", {
                            className: "border-b border-border bg-surface/50 text-left text-xs uppercase tracking-wider text-muted-foreground",
                            children: [
                              jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Patient" }),
                              jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Department" }),
                              jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Clinician" }),
                              jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Risk" }),
                              jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Status" }),
                              jsx.jsx("th", { className: "px-4 py-2.5 font-medium", children: "Last encounter" }),
                              jsx.jsx("th", { className: "px-4 py-2.5 font-medium" }),
                            ],
                          }),
                        }),
                        jsx.jsx("tbody", {
                          className: "divide-y divide-border",
                          children: filtered.length === 0
                            ? jsx.jsx("tr", { children: jsx.jsx("td", { colSpan: 7, className: "px-4 py-10 text-center text-sm text-muted-foreground", children: "No patients match the current filters." }) })
                            : filtered.map((patient) => jsx.jsxs("tr", {
                                onClick: () => setSelectedId(patient.id),
                                className: cn("cursor-pointer hover:bg-surface/60", selected.id === patient.id && "bg-accent/70"),
                                children: [
                                  jsx.jsx("td", {
                                    className: "px-4 py-3",
                                    children: jsx.jsxs("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        jsx.jsx("div", { className: "patient-avatar", children: patient.name.split(" ").map((part) => part[0]).join("").slice(0, 2) }),
                                        jsx.jsxs("div", { className: "min-w-0", children: [jsx.jsx("div", { className: "truncate font-medium text-foreground", children: patient.name }), jsx.jsxs("div", { className: "truncate text-xs text-muted-foreground", children: [patient.mrn, " · ", patient.age, patient.gender] })] }),
                                      ],
                                    }),
                                  }),
                                  jsx.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: patient.department }),
                                  jsx.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: patient.clinician }),
                                  jsx.jsx("td", { className: "px-4 py-3", children: jsx.jsx(RiskPill, { risk: patient.risk }) }),
                                  jsx.jsx("td", { className: "px-4 py-3", children: jsx.jsx(PatientStatus, { status: patient.status }) }),
                                  jsx.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground", children: formatRelativeTime(patient.lastEncounter) }),
                                  jsx.jsx("td", { className: "px-4 py-3 text-right", children: jsx.jsx("button", { type: "button", title: "Edit patient", className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground hover:border-border-strong hover:text-foreground", children: jsx.jsx(EditIcon, { className: "h-3.5 w-3.5" }) }) }),
                                ],
                              }, patient.id)),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              jsx.jsxs("aside", {
                className: "patient-detail rounded-xl border border-border bg-card",
                children: [
                  jsx.jsxs("div", {
                    className: "border-b border-border px-5 py-4",
                    children: [
                      jsx.jsxs("div", { className: "flex items-start justify-between gap-3", children: [jsx.jsxs("div", { children: [jsx.jsx("h2", { className: "text-sm font-semibold text-foreground", children: selected.name }), jsx.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: selected.mrn })] }), jsx.jsx(PatientStatus, { status: selected.status })] }),
                      jsx.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: selected.reason }),
                    ],
                  }),
                  jsx.jsxs("div", {
                    className: "divide-y divide-border",
                    children: [
                      jsx.jsx(DetailRow, { label: "Primary clinician", value: selected.clinician }),
                      jsx.jsx(DetailRow, { label: "Department", value: selected.department }),
                      jsx.jsx(DetailRow, { label: "Insurance", value: selected.insurance }),
                      jsx.jsx(DetailRow, { label: "Access scope", value: selected.access }),
                      jsx.jsx(DetailRow, { label: "Last encounter", value: formatRelativeTime(selected.lastEncounter) }),
                    ],
                  }),
                  jsx.jsxs("div", {
                    className: "space-y-3 border-t border-border px-5 py-4",
                    children: [
                      jsx.jsx("h3", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: "Access notes" }),
                      jsx.jsx("p", { className: "text-sm leading-6 text-muted-foreground", children: "Patient records should respect PATIENT_VIEW permissions in the role matrix. Limited access can expose demographics while hiding clinical notes." }),
                      jsx.jsxs("div", { className: "flex gap-2", children: [jsx.jsx("button", { className: "h-8 rounded-md border border-border bg-surface px-3 text-xs font-medium text-foreground hover:bg-accent", children: "Audit access" }), jsx.jsx("button", { className: "h-8 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground hover:bg-primary/90", children: "Open record" })] }),
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

function DetailRow({ label, value }) {
  return jsx.jsxs("div", {
    className: "flex items-center justify-between gap-4 px-5 py-3 text-sm",
    children: [jsx.jsx("span", { className: "text-muted-foreground", children: label }), jsx.jsx("span", { className: "text-right font-medium text-foreground", children: value })],
  });
}

export { PatientPage as component };
