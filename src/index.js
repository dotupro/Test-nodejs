const express = require("express");
const { engine } = require("express-handlebars"); // ✅ Sửa tại đây
const path = require("path");
const morgan = require("morgan");
const methodOverride = require("method-override");
const app = express();
const port = 3000;
const route = require("./routes");
const db = require("./config/db");

db.connect(); // Kết nối đến MongoDB

app.use(express.static(path.join(__dirname, "public")));
//app.use(morgan("combined"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Đăng ký engine đúng cách
app.engine(
  "hbs",
  engine({
    extname: ".hbs", // Khai báo đuôi file nếu bạn dùng .hbs thay vì .handlebars
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// HTTP method override
app.use(methodOverride("_method"));

route(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
