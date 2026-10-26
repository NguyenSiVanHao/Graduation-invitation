/**
 * FPT ORANGE ENERGY GRADUATION INVITATION CONFIGURATION
 * ------------------------------------------------------------------
 * Cấu hình toàn bộ thông tin sự kiện tốt nghiệp tại đây.
 * Dễ dàng tùy chỉnh tên sinh viên, ngày giờ, địa điểm và liên kết.
 */

export const invitationConfig = {
  // Thông tin sinh viên
  studentName: "Nguyễn Sĩ Vạn Hào",
  studentId: "SE172181",
  major: "Kỹ thuật Phần mềm (Software Engineering)",
  graduationYear: "2026",
  batch: "K17 · FPT University",

  // Thông điệp chủ đạo
  theme: "FPT ORANGE ENERGY · THE NEXT CHAPTER",
  tagline: "Một hành trình khép lại. Một hành trình mới bắt đầu.",

  // Thời gian tổ chức
  // Định dạng ISO: YYYY-MM-DDTHH:mm:ss (Dùng cho countdown timer thời gian thực)
  eventDateTimeISO: "2026-11-07T08:00:00+07:00",

  // Hiển thị ngày giờ dạng chữ thân thiện
  eventDateFormatted: "Thứ bảy, ngày 07 tháng 11 năm 2026",
  eventDay: "07",
  eventMonth: "11",
  eventYear: "2026",
  eventDayOfWeek: "THỨ BẢY",
  eventTime: "08:00 - 18:00",
  photoSessionTime: "08:00 - 18:00 (Chụp ảnh kỷ niệm cùng người thân & bạn bè)",

  // Địa điểm tổ chức
  venue: "Đại học FPT Hồ Chí Minh",
  address: "7 Đ. D1, Tăng Nhơn Phú, Hồ Chí Minh",

  // Bản đồ & Điều hướng (Google Maps)
  mapUrl: "https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+FPT+TP.+HCM/@10.8411329,106.8073081,17z/data=!3m1!4b1!4m6!3m5!1s0x31752731176b07b1:0xb752b24b379bae5e!8m2!3d10.8411276!4d106.809883!16s%2Fg%2F11j2zx_fz_?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",

  // Liên kết RSVP (có thể là Google Form, Zalo hoặc anchor #event-details)
  rsvpUrl: "#event-details",

  // Dresscode gợi ý (tùy chọn)
  dressCode: "Trang phục lịch sự, tươi sáng, đẹp là được",

  // Thông tin liên hệ nhanh
  contactPhone: "0975652978",
  facebookUrl: "https://www.facebook.com/hao.van.1466/",

  // Nội dung thư mời chi tiết
  invitationLetter: {
    salutation: (guestName) => `${guestName} thân mến,`,
    p1: "Có lẽ hành trình đại học là một trong những chương đáng nhớ nhất của tuổi trẻ. Đó là những ngày miệt mài học tập, những lần thử sức với điều mới, những niềm vui, những thử thách và cả những kỷ niệm mà sau này mình sẽ luôn nhớ về.",
    p2: "Và rồi, ngày tốt nghiệp cũng đến.",
    p3: "Mình rất vui nếu bạn có thể dành thời gian đến chung vui trong cột mốc quan trọng này. Sự hiện diện của bạn sẽ khiến khoảnh khắc ấy trở nên trọn vẹn và đáng nhớ hơn rất nhiều.",
    p4: "Hy vọng chúng ta sẽ có thêm một kỷ niệm đẹp để cùng nhau nhìn lại sau này.",
    closing: "Thân mời,",
  },
};
