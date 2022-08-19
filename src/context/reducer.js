import { produce } from "immer";

export const initialState = {
    entites: {
        users: {
            byId: {
                1436586: { id: 1436586, img: "https://img.freepik.com/free-photo/close-up-happy-redhead-man-face-smiling-with-white-teeth-camera-wearing-glasses-better-sight-t-shirt-standing-pink-background_1258-66709.jpg?w=2000&t=st=1660666466~exp=1660667066~hmac=9b63ecaf5551dc23ef6f55bbe718f129a90749e06f3e3ba8e46d8adcf25a117d", username: 'Jonddarkgalaxybrainfire', email: "Jonddarkgalaxybrainfire@gmail.com", age: 35, status: "Active", fullname:"Dave Williams", phone:"713-365-6726" },
                2678909: { id: 2678909, img: "https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=2000&t=st=1660666565~exp=1660667165~hmac=fd40c7204d7ff966a9cbb39be76b9ffdf36850b13ff4d6ed4ea8d7b3fd9b79b8", username: 'Cersei', email: "Cersei@gmail.com", age: 42, status: "Expired",fullname:"Ivan Thomas", phone:"916-293-8609" },
                3970457: { id: 3970457, img: "https://img.freepik.com/free-photo/positive-self-confident-man-keeps-arms-folded-looks-away-with-satisfied-expression-listens-good-news-wears-spectaces-casual-turtleneck-isolated-beige-background-blank-space-promo_273609-60459.jpg?w=2000&t=st=1660666590~exp=1660667190~hmac=ecf55c1f3ac62ff09ed5b94696aa611eec552da6cf8c5fb845f656fbea39cf7e", username: 'Jaime', email: "Jaime@gmail.com", age: 45, status: "Blocked",fullname:"Dan Robinson", phone:"540-871-0447" },
                4454357: { id: 4454357, img: "https://img.freepik.com/free-photo/travel-agent-hearing-customer-desires-portrait-good-looking-european-businesswoman-blue-blouse-glasses-holding-hands-pockets-smiling-being-friendly-polite-gray-wall_176420-25025.jpg?w=2000&t=st=1660666432~exp=1660667032~hmac=2eb868a4308625ab1a321bfe1493360191934e38be544fb8ab915637cda4dff5", username: 'Arya', email: "Arya@gmail.com", age: 16, status: "Active",fullname:"Daisy Nelson", phone:"617-835-7483" },
                5345799: { id: 5345799, img: "https://img.freepik.com/free-photo/enchanting-blinde-woman-trendy-knitted-sweater-expressing-happiness-indoor-portrait-charming-european-woman-standing-orange_197531-12473.jpg?w=2000&t=st=1660666469~exp=1660667069~hmac=6c0303e5e7b6ca54f10fda7d02461afb6b4b60b61cd786371f79cd9da7942344", username: 'Daenerys', email: "Daenerys@gmail.com", age: 25, status: "Active",fullname:"Isabel Morgan", phone:"248-271-1717" },
                6346456: { id: 6346456, img: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=2000&t=st=1660666652~exp=1660667252~hmac=ec5604423d30ed3496ed71ce4174c1f10135a0267872ab113625c6cf89499e61", username: "jeremi", email: "jeremi@gmail.com", age: 75, status: "Expired",fullname:"Samuel Martin", phone:"787-528-6615" },
                7131978: { id: 7131978, img: "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000", username: 'Ferrara', email: "Ferrara@gmail.com", age: 44, status: "Active",fullname:"Noel Anderson", phone:"323-314-5868" },
                8244568: { id: 8244568, img: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000&t=st=1660666708~exp=1660667308~hmac=2ee7ad00d98ec62d414a43479bcf45c59dc59abb7dcfa5e862b4400e0b7f8bd5", username: 'Rossini', email: "Rossini@gmail.com", age: 36, status: "Expired",fullname:"Romeo Perry", phone:"435-689-7920" },
                1967892: { id: 1967892, img: "https://img.freepik.com/free-photo/happy-woman-with-wavy-brown-hair-laughing-jocund-girl-striped-pink-attire-smiling_197531-9823.jpg?w=2000&t=st=1660666614~exp=1660667214~hmac=b1827fa3a1cb08e4bf5e0d3e5b8e6a1869a38ff8b5f0fbc39dadcac0e0661939", username: 'Harvey', email: "Harvey@gmail.com", age: 65, status: "Blocked",fullname:"Lucy Wheeler", phone:"602-287-3557" },
            },
            allIds: [1436586, 2678909, 3970457, 4454357, 5345799, 6346456, 7131978, 8244568, 1967892]
        },
        orders: {
            byId: {},
            allIds: []
        },
        products: {
            byId: {
                1436586: { id: 1436586, img: "https://m.media-amazon.com/images/I/417KKxluFGL._AC_SL1300_.jpg", productname: 'Lexar 64GB USB 3.2', description: "High Speed - With read speeds up to 100MB/s", price: "$12.99", status: "inStock" },
                2678909: { id: 2678909, img: "https://m.media-amazon.com/images/I/81G2RX66jBL._AC_SL1500_.jpg", productname: 'ASUS ROG STRIX NVIDIA GeForce RTX 3090', description: "Products with electrical plugs are designed for use in the US. ", price: "$1,299.00", status: "inStock" },
                3970457: { id: 3970457, img: "https://m.media-amazon.com/images/I/61-I0EmPj7L._AC_SL1000_.jpg", productname: 'Besign Adjustable Laptop Stand', description: "Broad Compatibility: BESIGN LS01 Laptop Stand is compatible with all laptops from 10''-15.6''", price: "$13.99", status: "unAvilable" },
                4454357: { id: 4454357, img: "https://m.media-amazon.com/images/I/71-p2FjHDvL._AC_SL1500_.jpg", productname: 'Thermaltake Massive TM Aluminum', description: "EXTREME VENTILATION: Dual 120mm temperature regulated fans allowing manual/automatic adjust the fan speed ", price: "$53.99", status: "inStock" },
                5345799: { id: 5345799, img: "https://m.media-amazon.com/images/I/81vTff6EagL._AC_SL1500_.jpg", productname: 'Logitech Trackman Marble Trackball Mouse', description: "TRACKBALL COMFORT - Sculpted ambidexterous shape supports your right or left hand and stays in one place—move the cursor without moving your arm ", price: "$25.99", status: "unAvilable" },
                6346456: { id: 6346456, img: "https://m.media-amazon.com/images/I/61QCd-9qHiL._SL1500_.jpg", productname: "FTDI USB RS232 to DB9 Communication Cable", description: "FTDI usb to db9 serial cable for APC UPS 940 0024C ", price: '$19.00', status: "unAvilable" },
                7131978: { id: 7131978, img: "https://m.media-amazon.com/images/I/71YC16-yKPL._AC_SL1500_.jpg", productname: 'MSI Gaming GeForce RTX 3090 Ti 24GB GDRR6X 384-Bit HDMI/DP', description: "Chipset: GeForce RTX 3090 Ti ", price: "$1,499.00", status: "inStock" },
                8244568: { id: 8244568, img: "https://m.media-amazon.com/images/I/61Ga1hZ5l8L._SL1001_.jpg", productname: 'GDSTIME EC Cooling Fan 80mm x 80mm x 25mm AC', description: "Package include: 1 Piece fan include fan grill and mounting screws & nuts; 1*Wire Clip; 1* US Plug Power Cord", price: "$13.99", status: "inStock" },
                1967892: { id: 1967892, img: "https://m.media-amazon.com/images/I/71QnZ3kKC4L._AC_SL1500_.jpg", productname: 'Kensington FP10 Surface Go Privacy Screen (K55900WW)', description: "Designed for the Microsoft Surface Go 1&2, this privacy screen is compatible with the touch screen", price: "$34.99", status: "unAvilable" }
            },
            allIds: [1436586,2678909,3970457,4454357,5345799,6346456,7131978,8244568,1967892]
        }
    }
}

function reducer(state, action) {
    switch (action.type) {
        case "users/ADD_USER":
            const { userinfo } = action.payload;
            state.entites.users.byId[userinfo.id] = { ...userinfo, status: "Active" };
            state.entites.users.allIds.push(userinfo.id);
            break;
        case "users/DELETE":
            const userId = action.payload.id;
            delete state.entites.users.byId[userId];
            const userIndex = state.entites.users.allIds.indexOf(userId);
            state.entites.users.allIds.splice(userIndex,1);
            break;
        case "products/ADD_PRODUCT":
            const { productinfo } = action.payload;
            state.entites.products.byId[productinfo.id] = productinfo;
            state.entites.products.allIds.push(productinfo.id);
            break;
        case "products/DELETE":
            const productId = action.payload.id;
            delete state.entites.products.byId[productId];
            const productIndex = state.entites.products.allIds.indexOf(productId);
            state.entites.products.allIds.splice(productIndex,1);
            break;
        default:
            break;
    }
}

export default produce(reducer);