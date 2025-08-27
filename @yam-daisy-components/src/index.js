// 🎯 EXPORTS PRINCIPAUX @yam/daisy-ui-components

// ===== CONTEXTS & HOOKS =====
export { ThemeProvider } from './contexts/ThemeContext';
export { default as ThemeContext } from './contexts/ThemeContext';

// ===== STYLES =====
import './styles/global.css';

// ===== ACTIONS =====
export { default as Button } from './components/common/Button';
export { default as Dropdown } from './components/common/Dropdown';
export { default as Modal } from './components/common/Modal';
export { default as Swap } from './components/common/Swap';

// ===== DATA DISPLAY =====
export { default as Avatar } from './components/common/Avatar';
export { default as Badge } from './components/common/Badge';
export { default as Card } from './components/common/Card';
export { default as Stat } from './components/common/Stat';
export { default as Table } from './components/common/Table';
export { default as Tooltip } from './components/common/Tooltip';

// ===== DATA INPUT =====
export { default as Checkbox } from './components/common/Checkbox';
export { default as FileInput } from './components/common/FileInput';
export { default as Input } from './components/common/Input';
export { default as Radio } from './components/common/Radio';
export { default as Range } from './components/common/Range';
export { default as Rating } from './components/common/Rating';
export { default as Select } from './components/common/Select';
export { default as Textarea } from './components/common/Textarea';
export { default as Toggle } from './components/common/Toggle';

// ===== FEEDBACK =====
export { default as Alert } from './components/common/Alert';
export { default as Loading } from './components/common/Loading';
export { default as Progress } from './components/common/Progress';
export { default as Skeleton } from './components/common/Skeleton';
export { default as Toast } from './components/common/Toast';

// ===== LAYOUT =====
export { default as Divider } from './components/common/Divider';
export { default as Drawer } from './components/common/Drawer';
export { default as Footer } from './components/common/Footer';
export { default as Hero } from './components/common/Hero';
export { default as Indicator } from './components/common/Indicator';
export { default as Join } from './components/common/Join';
export { default as Stack } from './components/common/Stack';

// ===== NAVIGATION =====
export { default as Breadcrumbs } from './components/common/Breadcrumbs';
export { default as Menu } from './components/common/Menu';
export { default as Navbar } from './components/common/Navbar';
export { default as Pagination } from './components/common/Pagination';
export { default as Steps } from './components/common/Steps';
export { default as Tab } from './components/common/Tab';

// ===== MOCKUP =====
// Aucun composant Mockup dans ce starter

// ===== THEME =====
export { default as ThemeSelector } from './components/common/ThemeSelector';

// ===== EXPORT GROUPÉ =====
export const YamComponents = {
  // Actions
  Button, Dropdown, Modal, Swap,
  // Data Display  
  Avatar, Badge, Card, Stat, Table, Tooltip,
  // Data Input
  Checkbox, FileInput, Input, Radio, Range, Rating, Select, Textarea, Toggle,
  // Feedback
  Alert, Loading, Progress, Skeleton, Toast,
  // Layout
  Divider, Drawer, Footer, Hero, Indicator, Join, Stack,
  // Navigation
  Breadcrumbs, Menu, Navbar, Pagination, Steps, Tab,
  // Theme
  ThemeSelector
};

// ===== DEFAULT EXPORT =====
export default YamComponents; 