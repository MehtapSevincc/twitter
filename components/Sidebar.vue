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

<style scoped lang="scss">
$primary-color :#1da1f2;
$border-color: #e6ecf0;
$sidebar-bg: #fff;

.sidebar {
  flex: 1;
  padding: 20px;
  background:$sidebar-bg;
  max-width: 250px;
  border-right: 1px solid $border-color;
  display: flex;
  flex-direction: column;

 ul {
  list-style: none;
  padding: 0;
  flex-grow: 1;

   li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  padding: 12px 0;
  cursor: pointer;

  &:hover {
    background-color: lighten($primary-color,42%);

  }
}
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

  &:hover{
    background-color: darken($primary-color, 5%);
  }
}

}

</style>
