db.auth("root", "example");

db = db.getSiblingDB("poker");

db.createUser({
  user: "dealer",
  pwd: "jB=`%r5*.<E^6+k",
  roles: [
    {
      role: "readWrite",
      db: "poker",
    },
  ],
});

db.message.insert({
  name: "SYS",
  message: "Lorem ipsum dolor sit amet",
});
