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

const ChevronRightIcon = createIcon("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);

const XIcon = createIcon("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
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
  const [query, setQuery] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [departmentFilter, setDepartmentFilter] = React.useState("all");
  const [sortBy, setSortBy] = React.useState("lastVisit");
  const [selectedId, setSelectedId] = React.useState(patients[0].id);
  const [detailOpen, setDetailOpen] = React.useState(false);
  const departments = React.useMemo(() => [...new Set(patients.map((patient) => patient.department))].sort(), []);
  const filtered = React.useMemo(() => {
    const needle = query.trim().toLowerCase();
    return patients
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
  }, [query, statusFilter, departmentFilter, sortBy]);
  React.useEffect(() => {
    if (filtered.length > 0 && !filtered.some((patient) => patient.id === selectedId)) {
      setSelectedId(filtered[0].id);
    }
  }, [filtered, selectedId]);
  const selected = patients.find((patient) => patient.id === selectedId) ?? filtered[0] ?? patients[0];
  const openPatient = (patient) => {
    setSelectedId(patient.id);
    setDetailOpen(true);
  };
  React.useEffect(() => {
    const handlePatientOpen = (event) => {
      const trigger = event.target.closest?.("[data-patient-detail-id]");
      if (!trigger) return;
      const patient = patients.find((item) => item.id === trigger.getAttribute("data-patient-detail-id"));
      if (!patient) return;
      setSelectedId(patient.id);
      setDetailOpen(true);
    };
    document.addEventListener("click", handlePatientOpen, true);
    return () => document.removeEventListener("click", handlePatientOpen, true);
  }, []);

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
              jsx.jsx(MetricCard, { label: "Patients", value: patients.length, hint: "Active records", tone: "rules", icon: UsersIcon }),
              jsx.jsx(MetricCard, { label: "In care", value: countBy("status", "in-care"), hint: "Assigned now", tone: "roles", icon: HeartPulseIcon }),
              jsx.jsx(MetricCard, { label: "Critical", value: countBy("status", "critical"), hint: "Needs review", tone: "actions", icon: ShieldIcon }),
              jsx.jsx(MetricCard, { label: "Scheduled", value: countBy("status", "scheduled"), hint: "Upcoming visits", tone: "objects", icon: DepartmentIcon }),
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
                  jsx.jsxs("select", {
                    value: statusFilter,
                    onChange: (event) => setStatusFilter(event.target.value),
                    className: "app-filter-select h-8 w-[170px] rounded-md border border-border bg-surface px-3 pr-9 text-xs text-foreground focus:outline-none",
                    children: [
                      jsx.jsx("option", { value: "all", children: `All (${patients.length})` }),
                      Object.entries(statusLabels).map(([value, label]) => jsx.jsx("option", { value, children: `${label} (${countBy("status", value)})` }, value)),
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
                      jsx.jsx("option", { value: "lastVisit", children: "Sort: Recent" }),
                      jsx.jsx("option", { value: "name", children: "Sort: Name" }),
                      jsx.jsx("option", { value: "department", children: "Sort: Department" }),
                      jsx.jsx("option", { value: "doctor", children: "Sort: Doctor" }),
                    ],
                  }),
                ],
              }),
              jsx.jsx("div", {
                className: "overflow-x-auto rounded-xl border border-border bg-card",
                children: jsx.jsxs("table", {
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
                        : filtered.map((patient) => jsx.jsxs("tr", {
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
              }),
            ],
          }),
        ],
      }),
      jsx.jsx(PatientDetailSheet, { patient: selected, open: detailOpen, onOpenChange: setDetailOpen }),
    ],
  });
}

function PatientDetailSheet({ patient, open, onOpenChange }) {
  return open
    ? jsx.jsxs("div", {
      className: "patient-sheet-layer",
      children: [
        jsx.jsx("button", { type: "button", className: "patient-sheet-backdrop", onClick: () => onOpenChange(false), "aria-label": "Close patient details" }),
        jsx.jsxs("aside", {
          className: "patient-sheet",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "patient-detail-title",
          children: [
            jsx.jsxs("div", {
              className: "patient-sheet-header",
              children: [
                jsx.jsxs("div", {
                  className: "flex min-w-0 items-start gap-3",
                  children: [
                    jsx.jsx("div", { className: "patient-avatar patient-detail-avatar", children: initials(patient.name) }),
                    jsx.jsxs("div", { className: "min-w-0 flex-1", children: [jsx.jsx("h2", { id: "patient-detail-title", className: "truncate text-base font-semibold text-foreground", children: patient.name }), jsx.jsx("p", { className: "mt-0.5 text-sm text-muted-foreground", children: patient.mrn })] }),
                  ],
                }),
                jsx.jsxs("div", { className: "flex items-center gap-2", children: [jsx.jsx(PatientStatus, { status: patient.status }), jsx.jsx("button", { type: "button", onClick: () => onOpenChange(false), className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground hover:bg-accent hover:text-foreground", "aria-label": "Close patient details", children: jsx.jsx(XIcon, { className: "h-4 w-4" }) })] }),
              ],
            }),
            jsx.jsxs("div", {
              className: "patient-sheet-body",
              children: [
                jsx.jsx("p", { className: "rounded-lg border border-border bg-surface px-3 py-3 text-sm leading-6 text-muted-foreground", children: patient.reason }),
                jsx.jsxs("div", {
                  className: "overflow-hidden rounded-lg border border-border",
                  children: [
                    jsx.jsx(DetailRow, { label: "Doctor", value: patient.doctor }),
                    jsx.jsx(DetailRow, { label: "Nurse", value: patient.nurse }),
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
              className: "patient-sheet-footer",
              children: [
                jsx.jsx("button", { className: "h-8 rounded-md border border-border bg-surface px-3 text-xs font-medium text-foreground hover:bg-accent", children: "Audit access" }),
                jsx.jsx("button", { className: "h-8 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground hover:bg-primary/90", children: "Open record" }),
              ],
            }),
          ],
        }),
      ],
    })
    : null;
}

function DetailRow({ label, value }) {
  return jsx.jsxs("div", {
    className: "flex items-center justify-between gap-4 border-b border-border px-4 py-3 text-sm last:border-b-0",
    children: [jsx.jsx("span", { className: "text-muted-foreground", children: label }), jsx.jsx("span", { className: "text-right font-medium text-foreground", children: value })],
  });
}

export { PatientPage as component };
