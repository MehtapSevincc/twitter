<template>
  <aside class="sidebar">
    <ul>
      <li><i class="fas fa-home"></i> Anasayfa</li>
      <li><i class="fas fa-hashtag"></i> Keşfet</li>
      <li><i class="fas fa-bell"></i> Bildirimler</li>
      <li><i class="fas fa-envelope"></i> Mesajlar</li>
      <li><i class="fas fa-bookmark"></i> Yer İşaretleri</li>
      <li><i class="fas fa-user"></i> Profil</li>
    </ul>
  
  </aside>
</template>

<style scoped>
.sidebar {
  flex: 1;
  padding: 20px;
  background: #fff;
  max-width: 250px;
  border-right: 1px solid #e6ecf0;
  display: flex;
  flex-direction: column;
}
.sidebar ul {
  list-style: none;
  padding: 0;
  flex-grow: 1;
}
.sidebar li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  padding: 12px 0;
  cursor: pointer;
}
.tweet-button {
  background: #1da1f2;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
}
</style>
