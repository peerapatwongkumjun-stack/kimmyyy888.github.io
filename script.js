// 1. ฐานข้อมูลอาหารหลากหลายเมนู (ครอบคลุมหลายหมวดหมู่และระดับราคา)
const foodList = [
  // หมวด: อาหารจานเดียว
  { name: "ข้าวกะเพราหมูสับไข่ดาว", price: 55, category: "อาหารจานเดียว", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT--yrqu39_hFDIJTO5x64nM1Z2-lqCg9ztjW_r90KWyw&s=10" },
  { name: "ข้าวมันไก่ต้ม", price: 50, category: "อาหารจานเดียว", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa3VK4mzCdadTF8r4mo2VZngcyRnIqHiKOKGfQgUd4sw&s=10" },
  { name: "ข้าวมันไก่ทอด", price: 50, category: "อาหารจานเดียว", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu7GDqkTEoHjDg_RQM5DFMcF-zabnodpC-aJKG4ZNd3g&s=10" },
  { name: "ข้าวผัดหมู", price: 50, category: "อาหารจานเดียว", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0FrmQnAb_4LLdhQYA_FoEoFN0k9060MMth59Q-ZoAFQ&s=10" },
  { name: "ข้าวผัดปู", price: 80, category: "อาหารจานเดียว", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6A9PXquo9jxhnKuJ6tGMo_s6w3D7TxK4dcoUfJhZCmQ&s=10" },
  { name: "ข้าวหมูกรอบผัดพริกเกลือ", price: 70, category: "อาหารจานเดียว", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_48wTHSOt7rAO-EEmsO3xdg2lgRUaOXt8BEjnKTwxw&s=10" },
  { name: "ข้าวขาหมูคากิ", price: 65, category: "อาหารจานเดียว", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Tl0vQDgBhlCc62byipQ0zkBwQVe3i5qS4MtaSfGuSg&s=10" },
  { name: "ข้าวหน้าเป็ดย่าง", price: 70, category: "อาหารจานเดียว", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzr2iI_SnJqAj4t8XDsK9C9mfR9vG9ghsNjdqE2j6AWg&s=10" },
  { name: "ข้าวหมูแดงหมูกรอบ", price: 60, category: "อาหารจานเดียว", image: "https://api2.krua.co/wp-content/uploads/2020/06/SEOForm1200x630-199.jpg" },
  { name: "ข้าวไข่เจียวทรงเครื่อง", price: 35, category: "อาหารจานเดียว", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQpy9w1HUheLCCX4Vw10x0oGWnki4_lmPR6IeJm9GiQQ&s=10" },
  { name: "ข้าวผัดพริกแกงหมูกรอบ", price: 65, category: "อาหารจานเดียว", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwaT4s-kK5ywDeLycsLW3rec0Hx-N4j9ywFyB2-7_kw&s=10" },
  { name: "ข้าวผัดต้มยำทะเล", price: 85, category: "อาหารจานเดียว", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnFwBLc6wOcMk6uNKtJkxwF18VyHEoT-cmJ8J-oNWK9g&s=10" },

  // หมวด: ก๋วยเตี๋ยว / เส้น
  { name: "ก๋วยเตี๋ยวต้มยำน้ำข้น", price: 55, category: "ก๋วยเตี๋ยว", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7DCw9k6hzubHlGQufRPhLxcu40Cje3vtX3F6Um_7sA&s=10" },
  { name: "ก๋วยเตี๋ยวเรือน้ำตกเนื้อ", price: 55, category: "ก๋วยเตี๋ยว", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZjCDOYnQ1m0pVu8rEvc_u226EzlziYU9IJf85K8KMw&s=10" },
  { name: "บะหมี่เกี๊ยวหมูแดง", price: 60, category: "ก๋วยเตี๋ยว", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz6zIPEbrk3RG8sHAx4uL-rGrDbD-eFKrX4YVIgLoH3A&s=10" },
  { name: "ผัดไทยกุ้งสด", price: 75, category: "ก๋วยเตี๋ยว", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ8ljkb320cVHIfDyMlMuRoHyBxtFqhNEmxpRaKrx5Pg&s=10" },
  { name: "ผัดซีอิ๊วหมูนุ่มเส้นใหญ่", price: 55, category: "ก๋วยเตี๋ยว", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dMO6jI5MR5TCsrOJlkvyghyqi31EprzST1HKRbDvLw&s=10" },
  { name: "ราดหน้าหมี่กรอบทะเล", price: 70, category: "ก๋วยเตี๋ยว", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzfz6wwYE5AMDr0m0c6KqtjyWkMUNPIKIUp3HVo3w5Q&s=10" },
  { name: "ก๋วยจั๊บญวนหมูยอ", price: 50, category: "ก๋วยเตี๋ยว", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROXqtLMRSg8W9JoFU6dvp1J1iBMVkcWIkHoC64f0HvUg&s=10" },
  { name: "ขนมจีนน้ำยาป่าลูกชิ้น", price: 45, category: "ก๋วยเตี๋ยว", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHkIYfOP6ZWN4AsmiEGxRlJSBdnDZCabEJztQim5rBgw&s=10" },

  // หมวด: ต้ม แกง กับข้าว
  { name: "ต้มยำกุ้งน้ำข้น", price: 120, category: "กับข้าว/แกง", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSle5b-yQzoiIqMeRi49849iFBBJf2QwVjiLjaMBf5CcQ&s=10" },
  { name: "แกงเขียวหวานไก่", price: 65, category: "กับข้าว/แกง", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyB3aach1d-YSMK33YoYia-Gb7u7IHfopiptfHfhosdg&s=10" },
  { name: "ต้มจืดเต้าหู้หมูสับสาหร่าย", price: 55, category: "กับข้าว/แกง", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3sWWj74-Cz-S-HbT14_b8FZKHEJxdQ_Tv6mF34LiCg&s=10" },
  { name: "แกงส้มชะอมกุ้ง", price: 90, category: "กับข้าว/แกง", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTwSF7Qc20rAxqLTbx6XRXLIvxVQM0YKpXMwKUr_WqJA&s=10" },

  // หมวด: ฟาสต์ฟู้ด / กินเล่น
  { name: "เฟรนช์ฟรายส์", price: 39, category: "ฟาสต์ฟู้ด", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPeBHswU3QqpklotH_bI1Gg7Os1wZOx8FTHP3COex1Sw&s=10" },
  { name: "นักเก็ตไก่ทอดกรอบ", price: 49, category: "ฟาสต์ฟู้ด", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZHgNUrjnNaguStRSLDIm29MNXQg3xQdmw-hvWvCd6DQ&s=10" },
  { name: "ไก่ทอดหาดใหญ่", price: 60, category: "ฟาสต์ฟู้ด", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VMyqpiy8JsW8qS94FGmc43jaXbgQZp1tSaAPIuaSCg&s=10" },
  { name: "พิซซ่าชีสมินิ", price: 99, category: "ฟาสต์ฟู้ด", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFy32f3-pngYH2LeX4wkvyPNiB8EaqsYshqhS3hf1-A&s=10" },
  { name: "เบอร์เกอร์เนื้อ", price: 50, category: "ฟาสต์ฟู้ด", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxzcsEL_NZ32zRFGRKinJubxFjs4Wtv5WXeUe18WZSfQ&s=10" },

  // หมวด: เครื่องดื่ม / ของหวาน
  { name: "ชานมไข่มุกบราวน์ชูการ์", price: 45, category: "เครื่องดื่ม/ของหวาน", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThk1WT-68rGtxUT1KTbMXoNmvNtszuPpRY5Jv-HbIIRikiqtMMB2WSwQs&s=10" },
  { name: "บิงซูผลไม้รวมเกล็ดหิมะ", price: 69, category: "เครื่องดื่ม/ของหวาน", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZUotnmTXvboIRDoyDj9E1K3gZHswvr1wd8Sq2NxAJFw&s=10" },
  { name: "ข้าวเหนียวมะม่วงอกร่อง", price: 79, category: "เครื่องดื่ม/ของหวาน", image: "https://blog.hungryhub.com/wp-content/uploads/2022/04/fresh-ripe-mango-sticky-rice-with-coconut-milk-dark-surface-1024x683.jpg" },
  { name: "ชาเขียวมัทฉะลาเต้เย็น", price: 50, category: "เครื่องดื่ม/ของหวาน", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrZ1bh0GznAhXke_2mxnZ_CkUcbNFtTIPZLgDJNZZ4Q&s=10" },
  { name: "โรตีกล้วยหอมราดช็อกโกแลต", price: 40, category: "เครื่องดื่ม/ของหวาน", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDoMlldEZTbexVc0P7aC3XKmkuKNpesz0cqLUB29Q40A&s=10" }
];

// เก็บสถานะเมนูปัจจุบัน
let currentMenu = null;
let toastTimeout = null;

// ดึงรายการเมนูโปรดจาก LocalStorage แบบเรียลไทม์
function getStoredFavorites() {
  try {
    const data = localStorage.getItem("menuPickerFavorites");
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

// บันทึกรายการเมนูโปรดลง LocalStorage แบบเรียลไทม์
function setStoredFavorites(favs) {
  try {
    localStorage.setItem("menuPickerFavorites", JSON.stringify(favs));
  } catch (e) {
    console.error("Storage error:", e);
  }
}

// อ้างอิง DOM Elements
const budgetInput = document.getElementById("budgetInput");
const categorySelect = document.getElementById("categorySelect");
const randomBtn = document.getElementById("randomBtn");
const reRandomBtn = document.getElementById("reRandomBtn");
const saveFavoriteBtn = document.getElementById("saveFavoriteBtn");
const clearAllFavBtn = document.getElementById("clearAllFavBtn");

const foodImage = document.getElementById("foodImage");
const menuName = document.getElementById("menuName");
const menuPrice = document.getElementById("menuPrice");
const menuCategory = document.getElementById("menuCategory");
const favoritesList = document.getElementById("favoritesList");
const favCountBadge = document.getElementById("favCount");
const toast = document.getElementById("toast");

// แสดงข้อความแจ้งเตือนแบบเรียลไทม์ (Toast notification)
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// ฟังก์ชันสุ่มเมนูอาหาร (ป้องกันการสุ่มซ้ำติดกัน เพื่อความหลากหลายสูงสุด)
function pickRandomMenu() {
  const budget = parseFloat(budgetInput.value);
  const selectedCategory = categorySelect.value;

  // กรองเมนูตามเงื่อนไข
  const filteredFoods = foodList.filter((item) => {
    const matchBudget = isNaN(budget) || item.price <= budget;
    const matchCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchBudget && matchCategory;
  });

  if (filteredFoods.length === 0) {
    showToast("⚠️ ไม่พบเมนูที่ตรงกับเงื่อนไข ลองเพิ่มงบหรือเปลี่ยนหมวดดูนะ");
    return;
  }

  // ป้องกันการสุ่มได้เมนูเดิมติดกันหากมีตัวเลือกมากกว่า 1 เมนู
  let candidates = filteredFoods;
  if (filteredFoods.length > 1 && currentMenu) {
    candidates = filteredFoods.filter((item) => item.name !== currentMenu.name);
  }

  const randomIndex = Math.floor(Math.random() * candidates.length);
  currentMenu = candidates[randomIndex];

  displayMenu(currentMenu);
}

// ฟังก์ชันแสดงผลเมนูที่สุ่มได้
function displayMenu(menu) {
  foodImage.src = menu.image;
  foodImage.alt = menu.name;
  menuName.textContent = menu.name;
  menuPrice.textContent = `ราคาประมาณ: ${menu.price} บาท`;
  menuCategory.textContent = `หมวดหมู่: ${menu.category}`;

  // ตรวจสอบสถานะเมนูโปรดแบบเรียลไทม์
  updateFavoriteButtonState();
}

// อัปเดตสถานะปุ่มเมนูโปรดแบบเรียลไทม์
function updateFavoriteButtonState() {
  if (!currentMenu) {
    saveFavoriteBtn.textContent = "บันทึกเป็นเมนูโปรด";
    saveFavoriteBtn.classList.remove("active");
    return;
  }

  const favorites = getStoredFavorites();
  const isFav = favorites.some((item) => item.name === currentMenu.name);

  if (isFav) {
    saveFavoriteBtn.textContent = "❤️ บันทึกแล้ว (คลิกเพื่อยกเลิก)";
    saveFavoriteBtn.classList.add("active");
  } else {
    saveFavoriteBtn.textContent = "บันทึกเป็นเมนูโปรด";
    saveFavoriteBtn.classList.remove("active");
  }
}

// ฟังก์ชันบันทึก / ยกเลิก เมนูโปรดแบบเรียลไทม์ (Toggle)
function toggleFavorite() {
  if (!currentMenu) {
    showToast("⚠️ กรุณากดสุ่มเมนูก่อนทำการบันทึก");
    return;
  }

  let favorites = getStoredFavorites();
  const existingIndex = favorites.findIndex((item) => item.name === currentMenu.name);

  if (existingIndex !== -1) {
    // นำออกจากรายการโปรด
    favorites.splice(existingIndex, 1);
    setStoredFavorites(favorites);
    showToast(`ลบ "${currentMenu.name}" ออกจากเมนูโปรดแล้ว`);
  } else {
    // เพิ่มเข้ารายการโปรด
    favorites.unshift(currentMenu); // นำรายการล่าสุดไว้ด้านบน
    setStoredFavorites(favorites);
    showToast(`บันทึก "${currentMenu.name}" เป็นเมนูโปรดแล้ว! ⭐`);
  }

  // อัปเดต UI ทันทีแบบเรียลไทม์
  renderFavorites();
  updateFavoriteButtonState();
}

// ลบเมนูโปรดทีละรายการแบบเรียลไทม์
function removeFavorite(name) {
  let favorites = getStoredFavorites();
  favorites = favorites.filter((item) => item.name !== name);
  setStoredFavorites(favorites);
  renderFavorites();
  updateFavoriteButtonState();
  showToast(`ลบ "${name}" ออกเรียบร้อยแล้ว`);
}

// ล้างรายการโปรดทั้งหมดแบบเรียลไทม์
function clearAllFavorites() {
  const favorites = getStoredFavorites();
  if (favorites.length === 0) return;

  if (confirm("ต้องการล้างรายการเมนูโปรดทั้งหมดใช่หรือไม่?")) {
    setStoredFavorites([]);
    renderFavorites();
    updateFavoriteButtonState();
    showToast("ล้างรายการเมนูโปรดทั้งหมดแล้ว");
  }
}

// ฟังก์ชันเรนเดอร์รายการเมนูโปรดและอัปเดตตัวเลข Badge แบบเรียลไทม์
function renderFavorites() {
  const favorites = getStoredFavorites();

  // อัปเดตตัวเลขนับเมนูโปรดแบบเรียลไทม์
  favCountBadge.textContent = favorites.length;

  favoritesList.innerHTML = "";

  if (favorites.length === 0) {
    favoritesList.innerHTML = '<li class="empty-text">ยังไม่มีเมนูโปรดที่บันทึกไว้</li>';
    return;
  }

  favorites.forEach((item) => {
    const li = document.createElement("li");

    const infoDiv = document.createElement("div");
    infoDiv.className = "fav-item-info";
    infoDiv.innerHTML = `<span>🍽️ <strong>${item.name}</strong></span> <span class="fav-item-price">(${item.price} บ.)</span>`;

    const delBtn = document.createElement("button");
    delBtn.className = "btn-delete";
    delBtn.title = "ลบเมนูนี้";
    delBtn.textContent = "✖";
    delBtn.addEventListener("click", () => removeFavorite(item.name));

    li.appendChild(infoDiv);
    li.appendChild(delBtn);
    favoritesList.appendChild(li);
  });
}

// ซิงค์ข้อมูลข้ามแท็บแบบเรียลไทม์ (เมื่อเปิดใช้งานหลายหน้าต่างพร้อมกัน)
window.addEventListener("storage", (e) => {
  if (e.key === "menuPickerFavorites") {
    renderFavorites();
    updateFavoriteButtonState();
  }
});

// Event Listeners
randomBtn.addEventListener("click", pickRandomMenu);
reRandomBtn.addEventListener("click", pickRandomMenu);
saveFavoriteBtn.addEventListener("click", toggleFavorite);
clearAllFavBtn.addEventListener("click", clearAllFavorites);

// เริ่มต้นโหลดรายการเมนูโปรดแบบเรียลไทม์เมื่อเปิดหน้าเว็บ
renderFavorites();
