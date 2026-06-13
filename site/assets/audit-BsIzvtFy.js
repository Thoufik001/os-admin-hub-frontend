import{u as i,r as l,j as e,A as m,P as u,S as x,t as h}from"./index-Df4dNtFP.js";import{S as j,a as g,b as t,c as q,d as C}from"./select-9XonwzbX.js";import"./index-NYxxxYXH.js";import"./index-CWQB4imr.js";

const M={staff:"Staff",department:"Department",role:"Role",system:"Session"};

function y(n){
  if(!n||n==="Unknown")return"?";
  return n.split(/\s+/).filter(Boolean).map(r=>r[0]).join("").slice(0,2).toUpperCase()
}

function b(n){
  if(n==="Unknown")return"bg-muted text-muted-foreground";
  return"bg-primary/15 text-primary"
}

function v(n){
  const r=n.event.toLowerCase(),o=n.object||"";
  if(r.includes("export"))return"Audit log";
  if(r.includes("login"))return"Session";
  return M[n.category]??n.category
}

function N(n){
  const r=n.event.toLowerCase(),o=n.object||"";
  if(r.includes("login success"))return`Successful login - ${o}`;
  if(r.includes("failed login"))return`Failed login attempt - ${o}`;
  if(r.includes("role assigned")&&o.includes("→")){
    const[a,c]=o.split("→").map(d=>d.trim());
    return`Assigned ${a} role to ${c}`
  }
  if(r.includes("role revoked")&&o.includes("×")){
    const[a,c]=o.split("×").map(d=>d.trim());
    return`Revoked ${a} role from ${c}`
  }
  if(r.includes("permission changed"))return`Changed permissions - ${o}`;
  if(r.includes("head of department"))return`Changed head of department - ${o}`;
  if(r.includes("staff added"))return`Added staff member - ${o}`;
  return o
}

function S(){
  const n=i(s=>s.audit),[r,o]=l.useState(""),[a,c]=l.useState("all"),f=l.useMemo(()=>({all:n.length,staff:n.filter(s=>s.category==="staff").length,department:n.filter(s=>s.category==="department").length,role:n.filter(s=>s.category==="role").length,system:n.filter(s=>s.category==="system").length}),[n]),d=l.useMemo(()=>[...n].filter(s=>a!=="all"&&s.category!==a?!1:r?`${s.event} ${s.object} ${s.performedBy} ${s.performedByRole}`.toLowerCase().includes(r.toLowerCase()):!0).sort((s,q)=>new Date(q.timestamp).getTime()-new Date(s.timestamp).getTime()),[n,r,a]);
  return e.jsxs(m,{children:[
    e.jsx(u,{title:"Records & Audit",description:"Every meaningful admin and system event, captured for audit and compliance."}),
    e.jsxs("div",{className:"space-y-4 px-8 py-6",children:[
      e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[
        e.jsxs("div",{className:"relative w-72",children:[
          e.jsx(x,{className:"pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground"}),
          e.jsx("input",{value:r,onChange:s=>o(s.target.value),placeholder:"Search events, details, or performers...",className:"h-8 w-full rounded-md border border-border bg-surface pl-8 pr-3 text-sm placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/40"})
        ]}),
        e.jsxs(j,{value:a,onValueChange:s=>c(s),children:[
          e.jsx(g,{className:"h-8 w-[180px] bg-surface text-xs",children:e.jsx(t,{placeholder:"Module"})}),
          e.jsxs(q,{children:[
            e.jsx(C,{value:"all",children:`All (${f.all})`}),
            e.jsx(C,{value:"staff",children:`Staff (${f.staff})`}),
            e.jsx(C,{value:"department",children:`Departments (${f.department})`}),
            e.jsx(C,{value:"role",children:`Roles (${f.role})`}),
            e.jsx(C,{value:"system",children:`Session (${f.system})`})
          ]})
        ]})
      ]}),
      e.jsx("div",{className:"audit-log-table-wrap overflow-hidden rounded-xl border border-border bg-card",children:e.jsxs("table",{className:"audit-log-table w-full text-sm",children:[
        e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border bg-surface/50 text-left text-xs uppercase tracking-wider text-muted-foreground",children:[
          e.jsx("th",{className:"px-4 py-2.5 font-medium",children:"Action"}),
          e.jsx("th",{className:"px-4 py-2.5 font-medium",children:"Detail"}),
          e.jsx("th",{className:"px-4 py-2.5 font-medium",children:"Performed by"}),
          e.jsx("th",{className:"px-4 py-2.5 font-medium",children:"Module"}),
          e.jsx("th",{className:"px-4 py-2.5 font-medium",children:"Time"})
        ]})}),
        e.jsx("tbody",{className:"divide-y divide-border",children:d.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"px-4 py-10 text-center text-sm text-muted-foreground",children:"No events match your filters."})}):d.map(s=>e.jsxs("tr",{className:"hover:bg-surface/40",children:[
          e.jsx("td",{className:"audit-action-cell px-4 py-3 font-medium text-foreground",children:s.event}),
          e.jsx("td",{className:"audit-detail-cell px-4 py-3 text-muted-foreground",children:N(s)}),
          e.jsx("td",{className:"px-4 py-3",children:e.jsxs("div",{className:"flex items-center gap-3",children:[
            e.jsx("div",{className:`audit-avatar flex h-8 w-8 items-center justify-center rounded-md text-xs font-medium ${b(s.performedBy)}`,children:y(s.performedBy)}),
            e.jsxs("div",{className:"min-w-0",children:[
              e.jsx("div",{className:"truncate font-medium text-foreground",children:s.performedBy}),
              e.jsx("div",{className:"truncate text-xs text-muted-foreground",children:s.performedByRole||"-"})
            ]})
          ]})}),
          e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:"audit-module-pill inline-flex rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground",children:v(s)})}),
          e.jsx("td",{className:"px-4 py-3 text-xs text-muted-foreground",children:h(s.timestamp)})
        ]},s.id))})
      ]})})
    ]})
  ]})
}

export{S as component};
