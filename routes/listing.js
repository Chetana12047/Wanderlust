const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const{isLoggedIn, isOwner, validatelisting, isReviewAuthor} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

//index,create route is compact by router.route which basically combines routes with same path
router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn, upload.single('listing[image]'), validatelisting,  wrapAsync(listingController.createListing));
 
//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

//show and update and delete route
router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn, isOwner, upload.single('listing[image]'), validatelisting, wrapAsync(listingController.updateListing ))
.delete(isLoggedIn,isOwner, wrapAsync(listingController.destroyListing));

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm ));

module.exports = router;