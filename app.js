// Application Data - In-Memory Storage
let appData = {
  users: [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      avatar: "👨‍💼",
      password: "demo123",
      role: "admin"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "👩‍💻",
      password: "demo123",
      role: "member"
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      avatar: "👨‍🎨",
      password: "demo123",
      role: "member"
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah@example.com",
      avatar: "👩‍🔬",
      password: "demo123",
      role: "member"
    },
    {
      id: 5,
      name: "Alex Chen",
      email: "alex@example.com",
      avatar: "👨‍🚀",
      password: "demo123",
      role: "member"
    }
  ],
  projects: [
    {
      id: 1,
      name: "Website Redesign",
      description: "Complete overhaul of company website",
      color: "#4CAF50",
      members: [1, 2, 3],
      createdBy: 1,
      createdAt: "2025-09-15T10:30:00Z"
    },
    {
      id: 2,
      name: "Mobile App Development",
      description: "iOS and Android app for customer portal",
      color: "#2196F3",
      members: [1, 4, 5],
      createdBy: 1,
      createdAt: "2025-09-20T14:15:00Z"
    },
    {
      id: 3,
      name: "Marketing Campaign Q4",
      description: "Holiday season marketing initiatives",
      color: "#FF9800",
      members: [2, 3, 4],
      createdBy: 2,
      createdAt: "2025-09-25T09:00:00Z"
    }
  ],
  columns: [
    {"id": 1, "name": "To Do", "projectId": 1, "order": 0},
    {"id": 2, "name": "In Progress", "projectId": 1, "order": 1},
    {"id": 3, "name": "Review", "projectId": 1, "order": 2},
    {"id": 4, "name": "Done", "projectId": 1, "order": 3},
    {"id": 5, "name": "To Do", "projectId": 2, "order": 0},
    {"id": 6, "name": "In Progress", "projectId": 2, "order": 1},
    {"id": 7, "name": "Testing", "projectId": 2, "order": 2},
    {"id": 8, "name": "Done", "projectId": 2, "order": 3},
    {"id": 9, "name": "Ideas", "projectId": 3, "order": 0},
    {"id": 10, "name": "Planning", "projectId": 3, "order": 1},
    {"id": 11, "name": "Execution", "projectId": 3, "order": 2},
    {"id": 12, "name": "Complete", "projectId": 3, "order": 3}
  ],
  tasks: [
    {
      id: 1,
      title: "Create homepage mockup",
      description: "Design new homepage layout with modern UI elements",
      projectId: 1,
      columnId: 2,
      assignedTo: 3,
      priority: "high",
      dueDate: "2025-10-10T00:00:00Z",
      labels: ["design", "frontend"],
      createdBy: 1,
      createdAt: "2025-10-01T09:00:00Z"
    },
    {
      id: 2,
      title: "Set up development environment",
      description: "Configure local development setup and CI/CD pipeline",
      projectId: 1,
      columnId: 4,
      assignedTo: 2,
      priority: "medium",
      dueDate: "2025-10-05T00:00:00Z",
      labels: ["backend", "devops"],
      createdBy: 1,
      createdAt: "2025-09-28T14:30:00Z"
    },
    {
      id: 3,
      title: "User authentication system",
      description: "Implement login, registration, and password reset functionality",
      projectId: 1,
      columnId: 1,
      assignedTo: 2,
      priority: "high",
      dueDate: "2025-10-15T00:00:00Z",
      labels: ["backend", "security"],
      createdBy: 1,
      createdAt: "2025-10-02T11:15:00Z"
    },
    {
      id: 4,
      title: "iOS app wireframes",
      description: "Create detailed wireframes for all app screens",
      projectId: 2,
      columnId: 6,
      assignedTo: 4,
      priority: "medium",
      dueDate: "2025-10-08T00:00:00Z",
      labels: ["design", "mobile"],
      createdBy: 1,
      createdAt: "2025-09-30T16:45:00Z"
    },
    {
      id: 5,
      title: "API endpoints documentation",
      description: "Document all REST API endpoints with examples",
      projectId: 2,
      columnId: 5,
      assignedTo: 5,
      priority: "low",
      dueDate: "2025-10-20T00:00:00Z",
      labels: ["backend", "documentation"],
      createdBy: 1,
      createdAt: "2025-10-01T13:20:00Z"
    },
    {
      id: 6,
      title: "Social media content calendar",
      description: "Plan content for October-December social media campaigns",
      projectId: 3,
      columnId: 10,
      assignedTo: 2,
      priority: "high",
      dueDate: "2025-10-12T00:00:00Z",
      labels: ["marketing", "social"],
      createdBy: 2,
      createdAt: "2025-09-29T10:00:00Z"
    },
    {
      id: 7,
      title: "Email campaign templates",
      description: "Design responsive email templates for holiday promotions",
      projectId: 3,
      columnId: 9,
      assignedTo: 3,
      priority: "medium",
      dueDate: "2025-10-18T00:00:00Z",
      labels: ["design", "email"],
      createdBy: 2,
      createdAt: "2025-10-02T15:30:00Z"
    }
  ],
  comments: [
    {
      id: 1,
      taskId: 1,
      authorId: 1,
      content: "Great progress on the mockup! The color scheme looks perfect.",
      createdAt: "2025-10-02T14:20:00Z"
    },
    {
      id: 2,
      taskId: 1,
      authorId: 3,
      content: "Thanks! I'll have the final version ready by tomorrow.",
      createdAt: "2025-10-02T14:25:00Z"
    },
    {
      id: 3,
      taskId: 4,
      authorId: 1,
      content: "Make sure to include the onboarding flow in the wireframes.",
      createdAt: "2025-10-01T09:10:00Z"
    },
    {
      id: 4,
      taskId: 6,
      authorId: 4,
      content: "Should we focus more on Instagram or LinkedIn for B2B content?",
      createdAt: "2025-10-01T16:40:00Z"
    }
  ]
};

// Global State
let currentUser = null;
let currentProject = null;
let currentTask = null;
let wsConnection = null;

// Utility Functions
function generateId() {
  return Math.max(...appData.users.map(u => u.id), ...appData.projects.map(p => p.id), ...appData.tasks.map(t => t.id), ...appData.comments.map(c => c.id)) + 1;
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString();
}

function formatDateTime(dateString) {
  return new Date(dateString).toLocaleString();
}

function isOverdue(dueDate) {
  return new Date(dueDate) < new Date();
}

function getUserById(id) {
  return appData.users.find(user => user.id === id);
}

function getProjectById(id) {
  return appData.projects.find(project => project.id === id);
}

function getTaskById(id) {
  return appData.tasks.find(task => task.id === id);
}

function getTasksByProject(projectId) {
  return appData.tasks.filter(task => task.projectId === projectId);
}

function getColumnsByProject(projectId) {
  return appData.columns.filter(column => column.projectId === projectId).sort((a, b) => a.order - b.order);
}

function getCommentsByTask(taskId) {
  return appData.comments.filter(comment => comment.taskId === taskId).sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
}

// Authentication
function login(email, password) {
  const user = appData.users.find(u => u.email === email && u.password === password);
  if (user) {
    currentUser = user;
    showPage('dashboard');
    updateUserInfo();
    loadDashboard();
    connectWebSocket();
    showNotification('Welcome back, ' + user.name + '!', 'success');
    return true;
  }
  return false;
}

function logout() {
  currentUser = null;
  currentProject = null;
  currentTask = null;
  if (wsConnection) {
    wsConnection.close();
  }
  showPage('login');
}

// Page Management
function showPage(page) {
  document.querySelectorAll('.login-page, .dashboard-page, .kanban-page').forEach(p => p.classList.add('hidden'));
  document.getElementById(page + 'Page').classList.remove('hidden');
}

// Notification System
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <div class="notification-text">${message}</div>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `;
  document.getElementById('notifications').appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

// Modal Management
function showModal(modalId) {
  document.getElementById(modalId).classList.remove('hidden');
}

function hideModal(modalId) {
  document.getElementById(modalId).classList.add('hidden');
}

// Dashboard Functions
function updateUserInfo() {
  if (currentUser) {
    document.getElementById('userAvatar').textContent = currentUser.avatar;
    document.getElementById('userName').textContent = currentUser.name;
  }
}

function loadDashboard() {
  const userProjects = appData.projects.filter(project => 
    project.members.includes(currentUser.id) || project.createdBy === currentUser.id
  );
  
  renderProjects(userProjects);
  renderActivity();
}

function renderProjects(projects) {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = projects.map(project => {
    const tasks = getTasksByProject(project.id);
    const members = project.members.map(getUserById).filter(Boolean);
    
    return `
      <div class="project-card card" data-project-id="${project.id}">
        <div class="project-header" style="background-color: ${project.color}">
          <h3 class="project-name">${project.name}</h3>
          <p class="project-description">${project.description}</p>
        </div>
        <div class="project-body">
          <div class="project-meta">
            <div class="project-members">
              ${members.slice(0, 3).map(member => 
                `<div class="member-avatar">${member.avatar}</div>`
              ).join('')}
              ${members.length > 3 ? `<div class="member-avatar">+${members.length - 3}</div>` : ''}
            </div>
            <div class="project-stats">
              <span>${tasks.length} tasks</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderActivity() {
  const activities = [
    { user: getUserById(3), action: 'completed task "Create homepage mockup"', time: '2 hours ago', avatar: '✅' },
    { user: getUserById(2), action: 'commented on "User authentication system"', time: '4 hours ago', avatar: '💬' },
    { user: getUserById(4), action: 'moved "iOS app wireframes" to Testing', time: '6 hours ago', avatar: '🔄' },
    { user: getUserById(1), action: 'created new project "Marketing Campaign Q4"', time: '1 day ago', avatar: '📁' }
  ];
  
  document.getElementById('activityFeed').innerHTML = activities.map(activity => `
    <div class="activity-item">
      <div class="activity-avatar">${activity.avatar}</div>
      <div class="activity-content">
        <p class="activity-text"><strong>${activity.user?.name || 'Unknown'}</strong> ${activity.action}</p>
        <div class="activity-time">${activity.time}</div>
      </div>
    </div>
  `).join('');
}

// Kanban Board Functions
function loadKanbanBoard(projectId) {
  currentProject = getProjectById(projectId);
  if (!currentProject) return;
  
  document.getElementById('kanbanTitle').textContent = currentProject.name;
  
  const columns = getColumnsByProject(projectId);
  const tasks = getTasksByProject(projectId);
  
  renderKanbanColumns(columns, tasks);
  populateFilters();
  showPage('kanban');
}

function renderKanbanColumns(columns, tasks) {
  const board = document.getElementById('kanbanBoard');
  board.innerHTML = columns.map(column => {
    const columnTasks = tasks.filter(task => task.columnId === column.id);
    
    return `
      <div class="kanban-column" data-column-id="${column.id}">
        <div class="column-header">
          <h3 class="column-title">${column.name}</h3>
          <span class="column-count">${columnTasks.length}</span>
        </div>
        <div class="column-body" data-column-id="${column.id}">
          ${columnTasks.map(renderTaskCard).join('')}
          <button class="add-task-btn" data-column-id="${column.id}">+ Add a task</button>
        </div>
      </div>
    `;
  }).join('');
  
  setupDragAndDrop();
  setupTaskEvents();
}

function renderTaskCard(task) {
  const assignee = task.assignedTo ? getUserById(task.assignedTo) : null;
  const comments = getCommentsByTask(task.id);
  const dueDate = task.dueDate ? new Date(task.dueDate) : null;
  const overdue = dueDate && isOverdue(task.dueDate);
  
  return `
    <div class="task-card" data-task-id="${task.id}" draggable="true">
      <div class="task-header">
        <div class="task-priority ${task.priority}"></div>
      </div>
      <h4 class="task-title">${task.title}</h4>
      ${task.description ? `<p class="task-description">${task.description}</p>` : ''}
      
      ${task.labels && task.labels.length > 0 ? `
        <div class="task-labels">
          ${task.labels.map(label => `<span class="task-label">${label}</span>`).join('')}
        </div>
      ` : ''}
      
      <div class="task-meta">
        <div class="task-assignee">
          ${assignee ? `
            <div class="assignee-avatar">${assignee.avatar}</div>
            <span>${assignee.name}</span>
          ` : '<span class="text-muted">Unassigned</span>'}
        </div>
        <div class="task-info">
          ${dueDate ? `<span class="task-due-date ${overdue ? 'overdue' : ''}">${formatDate(task.dueDate)}</span>` : ''}
          ${comments.length > 0 ? `<span>💬 ${comments.length}</span>` : ''}
        </div>
      </div>
    </div>
  `;
}

function populateFilters() {
  const assigneeFilter = document.getElementById('assigneeFilter');
  const members = currentProject.members.map(getUserById).filter(Boolean);
  
  assigneeFilter.innerHTML = '<option value="">All Assignees</option>' + 
    members.map(member => `<option value="${member.id}">${member.name}</option>`).join('');
}

// Drag and Drop
function setupDragAndDrop() {
  const taskCards = document.querySelectorAll('.task-card');
  const columns = document.querySelectorAll('.column-body');
  
  taskCards.forEach(card => {
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('dragend', handleDragEnd);
  });
  
  columns.forEach(column => {
    column.addEventListener('dragover', handleDragOver);
    column.addEventListener('drop', handleDrop);
    column.addEventListener('dragenter', handleDragEnter);
    column.addEventListener('dragleave', handleDragLeave);
  });
}

function handleDragStart(e) {
  e.target.classList.add('dragging');
  e.dataTransfer.setData('text/plain', e.target.dataset.taskId);
}

function handleDragEnd(e) {
  e.target.classList.remove('dragging');
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDragEnter(e) {
  if (e.target.classList.contains('column-body')) {
    e.target.classList.add('drag-over');
  }
}

function handleDragLeave(e) {
  if (e.target.classList.contains('column-body')) {
    e.target.classList.remove('drag-over');
  }
}

function handleDrop(e) {
  e.preventDefault();
  const taskId = parseInt(e.dataTransfer.getData('text/plain'));
  const columnId = parseInt(e.target.dataset.columnId);
  
  if (taskId && columnId) {
    moveTask(taskId, columnId);
  }
  
  e.target.classList.remove('drag-over');
}

function moveTask(taskId, newColumnId) {
  const task = getTaskById(taskId);
  const oldColumn = appData.columns.find(c => c.id === task.columnId);
  const newColumn = appData.columns.find(c => c.id === newColumnId);
  
  if (task && newColumn) {
    task.columnId = newColumnId;
    
    // Refresh the board
    const tasks = getTasksByProject(currentProject.id);
    const columns = getColumnsByProject(currentProject.id);
    renderKanbanColumns(columns, tasks);
    
    // Show notification
    showNotification(`Moved "${task.title}" to ${newColumn.name}`, 'success');
    
    // Simulate real-time update
    broadcastUpdate('task_moved', { taskId, oldColumn: oldColumn.name, newColumn: newColumn.name, user: currentUser.name });
  }
}

// Task Management
function openTaskModal(taskId = null) {
  currentTask = taskId ? getTaskById(taskId) : null;
  
  const modal = document.getElementById('taskModal');
  const title = document.getElementById('taskModalTitle');
  const deleteBtn = document.getElementById('deleteTaskBtn');
  
  if (currentTask) {
    title.textContent = 'Edit Task';
    populateTaskForm(currentTask);
    deleteBtn.style.display = 'inline-block';
  } else {
    title.textContent = 'Create New Task';
    resetTaskForm();
    deleteBtn.style.display = 'none';
  }
  
  populateTaskAssignees();
  populateTaskColumns();
  loadTaskComments();
  
  showModal('taskModal');
}

function populateTaskForm(task) {
  document.getElementById('taskTitle').value = task.title;
  document.getElementById('taskDescription').value = task.description || '';
  document.getElementById('taskAssignee').value = task.assignedTo || '';
  document.getElementById('taskPriority').value = task.priority;
  document.getElementById('taskDueDate').value = task.dueDate ? task.dueDate.split('T')[0] : '';
  document.getElementById('taskColumn').value = task.columnId;
  document.getElementById('taskLabels').value = task.labels ? task.labels.join(', ') : '';
}

function resetTaskForm() {
  document.getElementById('taskTitle').value = '';
  document.getElementById('taskDescription').value = '';
  document.getElementById('taskAssignee').value = '';
  document.getElementById('taskPriority').value = 'medium';
  document.getElementById('taskDueDate').value = '';
  document.getElementById('taskColumn').value = '';
  document.getElementById('taskLabels').value = '';
}

function populateTaskAssignees() {
  const select = document.getElementById('taskAssignee');
  const members = currentProject.members.map(getUserById).filter(Boolean);
  
  select.innerHTML = '<option value="">Unassigned</option>' +
    members.map(member => `<option value="${member.id}">${member.name}</option>`).join('');
}

function populateTaskColumns() {
  const select = document.getElementById('taskColumn');
  const columns = getColumnsByProject(currentProject.id);
  
  select.innerHTML = columns.map(column => `<option value="${column.id}">${column.name}</option>`).join('');
}

function saveTask() {
  const title = document.getElementById('taskTitle').value.trim();
  if (!title) {
    showNotification('Task title is required', 'error');
    return;
  }
  
  const taskData = {
    title,
    description: document.getElementById('taskDescription').value.trim(),
    assignedTo: parseInt(document.getElementById('taskAssignee').value) || null,
    priority: document.getElementById('taskPriority').value,
    dueDate: document.getElementById('taskDueDate').value ? new Date(document.getElementById('taskDueDate').value).toISOString() : null,
    columnId: parseInt(document.getElementById('taskColumn').value),
    labels: document.getElementById('taskLabels').value.split(',').map(l => l.trim()).filter(Boolean),
    projectId: currentProject.id
  };
  
  if (currentTask) {
    // Update existing task
    Object.assign(currentTask, taskData);
    showNotification('Task updated successfully', 'success');
  } else {
    // Create new task
    const newTask = {
      id: generateId(),
      ...taskData,
      createdBy: currentUser.id,
      createdAt: new Date().toISOString()
    };
    appData.tasks.push(newTask);
    showNotification('Task created successfully', 'success');
  }
  
  // Refresh the board
  const tasks = getTasksByProject(currentProject.id);
  const columns = getColumnsByProject(currentProject.id);
  renderKanbanColumns(columns, tasks);
  
  hideModal('taskModal');
  
  // Simulate real-time update
  broadcastUpdate('task_updated', { taskTitle: title, user: currentUser.name });
}

function deleteTask() {
  if (currentTask && confirm('Are you sure you want to delete this task?')) {
    appData.tasks = appData.tasks.filter(task => task.id !== currentTask.id);
    appData.comments = appData.comments.filter(comment => comment.taskId !== currentTask.id);
    
    // Refresh the board
    const tasks = getTasksByProject(currentProject.id);
    const columns = getColumnsByProject(currentProject.id);
    renderKanbanColumns(columns, tasks);
    
    hideModal('taskModal');
    showNotification('Task deleted successfully', 'success');
    
    // Simulate real-time update
    broadcastUpdate('task_deleted', { taskTitle: currentTask.title, user: currentUser.name });
  }
}

// Comments System
function loadTaskComments() {
  if (!currentTask) {
    document.getElementById('commentsList').innerHTML = '';
    return;
  }
  
  const comments = getCommentsByTask(currentTask.id);
  document.getElementById('commentsList').innerHTML = comments.map(comment => {
    const author = getUserById(comment.authorId);
    return `
      <div class="comment">
        <div class="comment-avatar">${author.avatar}</div>
        <div class="comment-content">
          <div class="comment-header">
            <span class="comment-author">${author.name}</span>
            <span class="comment-time">${formatDateTime(comment.createdAt)}</span>
          </div>
          <p class="comment-text">${comment.content}</p>
        </div>
      </div>
    `;
  }).join('');
}

function addComment() {
  const content = document.getElementById('newComment').value.trim();
  if (!content || !currentTask) return;
  
  const comment = {
    id: generateId(),
    taskId: currentTask.id,
    authorId: currentUser.id,
    content,
    createdAt: new Date().toISOString()
  };
  
  appData.comments.push(comment);
  loadTaskComments();
  document.getElementById('newComment').value = '';
  
  showNotification('Comment added', 'success');
  
  // Simulate real-time update
  broadcastUpdate('comment_added', { taskTitle: currentTask.title, user: currentUser.name });
}

// Project Management
function createProject() {
  const name = document.getElementById('projectName').value.trim();
  const description = document.getElementById('projectDescription').value.trim();
  const color = document.getElementById('projectColor').value;
  
  if (!name) {
    showNotification('Project name is required', 'error');
    return;
  }
  
  const project = {
    id: generateId(),
    name,
    description,
    color,
    members: [currentUser.id],
    createdBy: currentUser.id,
    createdAt: new Date().toISOString()
  };
  
  appData.projects.push(project);
  
  // Create default columns
  const defaultColumns = ['To Do', 'In Progress', 'Review', 'Done'];
  defaultColumns.forEach((columnName, index) => {
    appData.columns.push({
      id: generateId(),
      name: columnName,
      projectId: project.id,
      order: index
    });
  });
  
  hideModal('createProjectModal');
  loadDashboard();
  showNotification('Project created successfully', 'success');
  
  // Clear form
  document.getElementById('createProjectForm').reset();
}

// Search and Filter
function setupSearchAndFilter() {
  const searchInput = document.getElementById('taskSearch');
  const assigneeFilter = document.getElementById('assigneeFilter');
  
  searchInput.addEventListener('input', filterTasks);
  assigneeFilter.addEventListener('change', filterTasks);
}

function filterTasks() {
  const searchTerm = document.getElementById('taskSearch').value.toLowerCase();
  const assigneeId = document.getElementById('assigneeFilter').value;
  
  const tasks = getTasksByProject(currentProject.id);
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = !searchTerm || 
      task.title.toLowerCase().includes(searchTerm) ||
      (task.description && task.description.toLowerCase().includes(searchTerm));
    
    const matchesAssignee = !assigneeId || task.assignedTo == assigneeId;
    
    return matchesSearch && matchesAssignee;
  });
  
  const columns = getColumnsByProject(currentProject.id);
  renderKanbanColumns(columns, filteredTasks);
}

// WebSocket Simulation
function connectWebSocket() {
  // Simulate WebSocket connection
  wsConnection = {
    connected: true,
    close: () => { wsConnection.connected = false; }
  };
  
  updateConnectionStatus(true);
  
  // Simulate periodic connection checks
  setInterval(() => {
    updateConnectionStatus(wsConnection.connected);
  }, 5000);
}

function updateConnectionStatus(connected) {
  const indicator = document.querySelector('.status-indicator');
  const text = document.querySelector('.status-text');
  
  if (connected) {
    indicator.classList.add('connected');
    text.textContent = 'Connected';
  } else {
    indicator.classList.remove('connected');
    text.textContent = 'Disconnected';
  }
}

function broadcastUpdate(type, data) {
  // Simulate real-time updates to other users
  setTimeout(() => {
    if (Math.random() > 0.7) { // 30% chance of simulated update
      showNotification(`Real-time update: ${data.user} ${type.replace('_', ' ')}`, 'info');
    }
  }, 1000);
}

// Event Listeners
function setupEventListeners() {
  // Login form
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (login(email, password)) {
      document.getElementById('loginForm').reset();
    } else {
      showNotification('Invalid credentials', 'error');
    }
  });
  
  // Demo user clicks
  document.querySelectorAll('.demo-user').forEach(user => {
    user.addEventListener('click', () => {
      const email = user.dataset.email;
      document.getElementById('email').value = email;
      document.getElementById('password').value = 'demo123';
    });
  });
  
  // Logout
  document.getElementById('logoutBtn').addEventListener('click', logout);
  
  // Project cards
  document.addEventListener('click', (e) => {
    const projectCard = e.target.closest('.project-card');
    if (projectCard) {
      const projectId = parseInt(projectCard.dataset.projectId);
      loadKanbanBoard(projectId);
    }
  });
  
  // Back to dashboard
  document.getElementById('backToDashboard').addEventListener('click', () => {
    showPage('dashboard');
    loadDashboard();
  });
  
  // Create project button
  document.getElementById('createProjectBtn').addEventListener('click', () => {
    showModal('createProjectModal');
  });
  
  // Create project form
  document.getElementById('createProjectForm').addEventListener('submit', (e) => {
    e.preventDefault();
    createProject();
  });
  
  // Add task buttons
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-task-btn')) {
      const columnId = parseInt(e.target.dataset.columnId);
      document.getElementById('taskColumn').value = columnId;
      openTaskModal();
    }
  });
  
  // Task cards
  document.addEventListener('click', (e) => {
    const taskCard = e.target.closest('.task-card');
    if (taskCard && !e.target.classList.contains('add-task-btn')) {
      const taskId = parseInt(taskCard.dataset.taskId);
      openTaskModal(taskId);
    }
  });
  
  // Add task button in header
  document.getElementById('addTaskBtn').addEventListener('click', () => {
    openTaskModal();
  });
  
  // Task modal buttons
  document.getElementById('saveTaskBtn').addEventListener('click', saveTask);
  document.getElementById('deleteTaskBtn').addEventListener('click', deleteTask);
  document.getElementById('addCommentBtn').addEventListener('click', addComment);
  
  // Modal close buttons
  document.querySelectorAll('.modal-close, [data-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modalId = btn.dataset.modal || btn.closest('.modal').id;
      if (modalId) {
        hideModal(modalId);
      }
    });
  });
  
  // Modal overlay clicks
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        hideModal(overlay.closest('.modal').id);
      }
    });
  });
  
  // Setup search and filter
  setupSearchAndFilter();
}

function setupTaskEvents() {
  // Add task buttons
  document.querySelectorAll('.add-task-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const columnId = parseInt(btn.dataset.columnId);
      document.getElementById('taskColumn').value = columnId;
      openTaskModal();
    });
  });
  
  // Task cards
  document.querySelectorAll('.task-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!card.classList.contains('dragging')) {
        const taskId = parseInt(card.dataset.taskId);
        openTaskModal(taskId);
      }
    });
  });
}

// Initialize Application
function init() {
  setupEventListeners();
  showPage('login');
  updateConnectionStatus(false);
}

// Start the application
document.addEventListener('DOMContentLoaded', init);