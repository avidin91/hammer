export const mapUserData = (data) => {
  return data.map(user => {
    return  {
      id: user.id,
      name: user.name,
      email: user.email,
      img: "/img/avatars/thumb-1.jpg",
      role: 'User',
      lastOnline: 1573430400,
      status: "active",
      personalInfo: {
        location: user.address.city,
        title: "Product Manager",
        birthday: "10/10/1992",
        phoneNumber: user.phone,
        facebook: "facebook.com/sample",
        twitter: "twitter.com/sample",
        instagram: "instagram.com/sample",
        site: user.site,
      }
    }
  });
}