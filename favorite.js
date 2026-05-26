/**
 * YCHub 青途校园 - 收藏功能模块
 * 统一管理活动收藏功能，供各页面共享使用
 */

// 收藏功能命名空间
const FavoriteManager = {
  STORAGE_KEY: 'ychub_favorites',

  // 获取所有收藏的活动ID
  getFavorites() {
    const favorites = localStorage.getItem(this.STORAGE_KEY);
    return favorites ? JSON.parse(favorites) : [];
  },

  // 保存收藏列表
  saveFavorites(favorites) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(favorites));
  },

  // 添加收藏
  addFavorite(activityId) {
    const favorites = this.getFavorites();
    if (!favorites.includes(activityId)) {
      favorites.push(activityId);
      this.saveFavorites(favorites);
    }
  },

  // 取消收藏
  removeFavorite(activityId) {
    const favorites = this.getFavorites();
    const index = favorites.indexOf(activityId);
    if (index > -1) {
      favorites.splice(index, 1);
      this.saveFavorites(favorites);
    }
  },

  // 切换收藏状态
  toggleFavorite(activityId) {
    const favorites = this.getFavorites();
    if (favorites.includes(activityId)) {
      this.removeFavorite(activityId);
      return false;
    } else {
      this.addFavorite(activityId);
      return true;
    }
  },

  // 检查是否已收藏
  isFavorited(activityId) {
    const favorites = this.getFavorites();
    return favorites.includes(activityId);
  },

  // 获取收藏数量
  getFavoriteCount() {
    return this.getFavorites().length;
  }
};

// 全局函数：检查活动是否已收藏
function isActivityFavorited(activityId) {
  return FavoriteManager.isFavorited(activityId);
}

// 全局函数：切换收藏状态（用于活动卡片）
function toggleFavorite(event, activityId) {
  event.preventDefault();
  event.stopPropagation();

  const isFavorited = FavoriteManager.toggleFavorite(activityId);
  const btn = event.currentTarget;
  const heartIcon = btn.querySelector('.heart-icon');

  // 更新按钮状态
  if (isFavorited) {
    btn.classList.add('favorited');
    heartIcon.textContent = '❤️';
    btn.title = '取消收藏';
    showToast('已添加到收藏 ❤️');
  } else {
    btn.classList.remove('favorited');
    heartIcon.textContent = '🤍';
    btn.title = '添加收藏';
    showToast('已取消收藏 🤍');
  }

  // 更新个人中心收藏数量徽章（如果页面中有显示）
  updateFavoriteBadge();
}

// 全局函数：切换详情页收藏状态
function toggleDetailFavorite() {
  const btn = document.getElementById('detailFavoriteBtn');
  if (!btn) return;

  const heartIcon = btn.querySelector('.heart-icon');
  const btnText = btn.querySelector('.btn-text');

  // 从URL获取当前活动ID
  const urlParams = new URLSearchParams(window.location.search);
  const currentActivityId = parseInt(urlParams.get('id')) || 1;

  const isFavorited = FavoriteManager.toggleFavorite(currentActivityId);

  if (isFavorited) {
    btn.classList.add('favorited');
    heartIcon.textContent = '❤️';
    btnText.textContent = '已收藏';
    showToast('已添加到收藏 ❤️');
  } else {
    btn.classList.remove('favorited');
    heartIcon.textContent = '🤍';
    btnText.textContent = '添加收藏';
    showToast('已取消收藏 🤍');
  }
}

// 全局函数：从收藏列表中移除（用于个人中心页面）
function removeFavoriteFromList(event, activityId) {
  event.preventDefault();
  event.stopPropagation();

  FavoriteManager.removeFavorite(activityId);
  showToast('已取消收藏 🤍');

  // 重新渲染收藏列表
  if (typeof renderFavorites === 'function') {
    renderFavorites();
  }
}

// 初始化详情页收藏按钮状态
function initDetailFavoriteButton() {
  const btn = document.getElementById('detailFavoriteBtn');
  if (!btn) return;

  const heartIcon = btn.querySelector('.heart-icon');
  const btnText = btn.querySelector('.btn-text');

  // 从URL获取当前活动ID
  const urlParams = new URLSearchParams(window.location.search);
  const currentActivityId = parseInt(urlParams.get('id')) || 1;

  if (FavoriteManager.isFavorited(currentActivityId)) {
    btn.classList.add('favorited');
    heartIcon.textContent = '❤️';
    btnText.textContent = '已收藏';
  } else {
    btn.classList.remove('favorited');
    heartIcon.textContent = '🤍';
    btnText.textContent = '添加收藏';
  }
}

// 显示提示消息
function showToast(message) {
  // 移除已有的toast
  const existingToast = document.querySelector('.favorite-toast');
  if (existingToast) {
    existingToast.remove();
  }

  // 创建新的toast
  const toast = document.createElement('div');
  toast.className = 'favorite-toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  // 显示动画
  setTimeout(() => toast.classList.add('show'), 10);

  // 3秒后隐藏
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

// 更新收藏数量徽章
function updateFavoriteBadge() {
  const badge = document.getElementById('favoriteBadge');
  if (badge) {
    badge.textContent = FavoriteManager.getFavoriteCount();
  }
}

// 页面加载时初始化收藏相关UI
document.addEventListener('DOMContentLoaded', function() {
  // 初始化详情页收藏按钮
  initDetailFavoriteButton();

  // 更新收藏徽章
  updateFavoriteBadge();
});

// 导出模块（兼容不同引入方式）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FavoriteManager, isActivityFavorited, toggleFavorite, toggleDetailFavorite, removeFavoriteFromList, showToast };
}
