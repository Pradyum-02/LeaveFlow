// LeaveFlow - Shared JS (placeholder data + UI helpers)
// Ready to be swapped with fetch() calls to Node.js/Express/MongoDB backend.

const API_BASE = "https://leaveflow-backend-nbuz.onrender.com/";

// ---------- Placeholder Data ----------
const CURRENT_USER = {
  name: 'Rahul Sharma',
  employeeId: 'EMP1023',
  department: 'Engineering',
  email: 'rahul.sharma@leaveflow.com',
  role: 'employee',
};

const LEAVE_HISTORY = [
  { id: 1, type: 'Sick Leave',   start: '2026-06-04', end: '2026-06-05', days: 2, status: 'Approved' },
  { id: 2, type: 'Casual Leave', start: '2026-07-10', end: '2026-07-10', days: 1, status: 'Pending'  },
  { id: 3, type: 'Earned Leave', start: '2026-05-15', end: '2026-05-19', days: 5, status: 'Approved' },
  { id: 4, type: 'Casual Leave', start: '2026-04-01', end: '2026-04-01', days: 1, status: 'Rejected' },
  { id: 5, type: 'Sick Leave',   start: '2026-03-22', end: '2026-03-23', days: 2, status: 'Approved' },
];

const EMPLOYEES = [
  { name: 'Rahul Sharma',   id: 'EMP1023', department: 'Engineering', email: 'rahul.sharma@leaveflow.com' },
  { name: 'Priya Verma',    id: 'EMP1024', department: 'HR',          email: 'priya.verma@leaveflow.com' },
  { name: 'Ankit Mehta',    id: 'EMP1025', department: 'Finance',     email: 'ankit.mehta@leaveflow.com' },
  { name: 'Sneha Kapoor',   id: 'EMP1026', department: 'Marketing',   email: 'sneha.kapoor@leaveflow.com' },
  { name: 'Vikram Iyer',    id: 'EMP1027', department: 'Engineering', email: 'vikram.iyer@leaveflow.com' },
  { name: 'Neha Singh',     id: 'EMP1028', department: 'Design',      email: 'neha.singh@leaveflow.com' },
];

const ADMIN_REQUESTS = [
  { reqId: 1, name: 'Priya Verma',  empId: 'EMP1024', dept: 'HR',          type: 'Sick Leave',   start: '2026-07-20', end: '2026-07-21', days: 2, reason: 'Fever and rest', status: 'Pending' },
  { reqId: 2, name: 'Ankit Mehta',  empId: 'EMP1025', dept: 'Finance',     type: 'Casual Leave', start: '2026-07-25', end: '2026-07-25', days: 1, reason: 'Personal work',  status: 'Pending' },
  { reqId: 3, name: 'Sneha Kapoor', empId: 'EMP1026', dept: 'Marketing',   type: 'Earned Leave', start: '2026-08-01', end: '2026-08-05', days: 5, reason: 'Family vacation', status: 'Pending' },
  { reqId: 4, name: 'Vikram Iyer',  empId: 'EMP1027', dept: 'Engineering', type: 'Sick Leave',   start: '2026-06-14', end: '2026-06-15', days: 2, reason: 'Medical checkup', status: 'Approved' },
  { reqId: 5, name: 'Neha Singh',   empId: 'EMP1028', dept: 'Design',      type: 'Casual Leave', start: '2026-05-30', end: '2026-05-30', days: 1, reason: 'Wedding function', status: 'Rejected' },
];

// ---------- Helpers ----------
function badge(status) {
  const cls = status === 'Approved' ? 'badge-approved'
            : status === 'Rejected' ? 'badge-rejected'
            : 'badge-pending';
  return `<span class="badge ${cls}">${status}</span>`;
}

function initials(name) {
  return name.split(' ').map(w => w[0]).slice(0,2).join('').toUpperCase();
}

function logout() {
  window.location.href = '../index.html';
}

function toggleSidebar() {
  const s = document.querySelector('.sidebar');
  const o = document.querySelector('.sidebar-overlay');
  s.classList.toggle('open');
  o.classList.toggle('show');
}

// ---------- Renderers ----------
function renderTopbar(title) {
  const u = CURRENT_USER;
  return `
    <div class="topbar">
      <div style="display:flex;align-items:center;gap:12px;">
        <button class="menu-toggle" onclick="toggleSidebar()">&#9776;</button>
        <h1>${title}</h1>
      </div>
      <div class="user">
        <div class="avatar">${initials(u.name)}</div>
        <div class="name-txt">
          <div style="font-size:13px;font-weight:600;">${u.name}</div>
          <div style="font-size:11px;color:var(--text-muted);">${u.employeeId}</div>
        </div>
      </div>
    </div>`;
}

function renderSidebar(active, role) {
  const employeeLinks = [
    { href: 'dashboard.html',    icon: '⌂', label: 'Dashboard',    key: 'dashboard' },
    { href: 'apply-leave.html',  icon: '＋', label: 'Apply Leave',  key: 'apply' },
    { href: 'leave-history.html',icon: '☰', label: 'Leave History',key: 'history' },
    { href: 'profile.html',      icon: '☺', label: 'Profile',      key: 'profile' },
  ];
  const adminLinks = [
    { href: 'admin-dashboard.html', icon: '⌂', label: 'Dashboard',       key: 'admin-dashboard' },
    { href: 'manage-leaves.html',   icon: '✓', label: 'Manage Leaves',   key: 'manage' },
    { href: 'employees.html',       icon: '☰', label: 'Employees',       key: 'employees' },
  ];

  const links = role === 'admin' ? adminLinks : employeeLinks;

  return `
    <aside class="sidebar">
      <div class="logo">
        <h2>LeaveFlow</h2>
        <span>${role === 'admin' ? 'Admin Panel' : 'Employee Portal'}</span>
      </div>
      <nav class="nav">
        <div class="nav-section-title">${role === 'admin' ? 'Admin' : 'Menu'}</div>
        ${links.map(l => `
          <a href="${l.href}" class="${active === l.key ? 'active' : ''}">
            <span class="icon">${l.icon}</span> ${l.label}
          </a>
        `).join('')}
        <div class="logout-btn">
          <a href="#" onclick="logout();return false;">
            <span class="icon">⎋</span> Logout
          </a>
        </div>
      </nav>
    </aside>
    <div class="sidebar-overlay" onclick="toggleSidebar()"></div>
  `;
}

function mountLayout({ active, title, role = 'employee', content }) {
  document.body.innerHTML = `
    <div class="app">
      ${renderSidebar(active, role)}
      <main class="main">
        ${renderTopbar(title)}
        ${content}
      </main>
    </div>
  `;
}
