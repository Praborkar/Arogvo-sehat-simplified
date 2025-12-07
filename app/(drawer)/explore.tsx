<<<<<<< HEAD
import { Ionicons } from "@expo/vector-icons";
=======
// Explore.js
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
>>>>>>> d1de87fdded42449ce63ba0066ee90b2dc0c680f
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Dimensions,
<<<<<<< HEAD
  Image,
  ScrollView,
  StyleSheet,
  Text,
=======
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
>>>>>>> d1de87fdded42449ce63ba0066ee90b2dc0c680f
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

<<<<<<< HEAD
// ----------------------------------------------------
// DATA
// ----------------------------------------------------

const DOCTOR_APPOINTMENTS = [
  {
    id: 1,
    name: "Dr. Kavita Sharma",
    role: "Dermatologist",
    rating: 4.8,
    reviews: 87,
    nextSlot: "Today • 10:30 AM",
    featured: true,
    img: require("../../assets/images/doctor.png"),
  },
  {
    id: 2,
    name: "Dr. Aman Verma",
    role: "Orthopedic Surgeon",
    rating: 4.7,
    reviews: 65,
    nextSlot: "Today • 11:15 AM",
    featured: false,
    img: require("../../assets/images/doctor.png"),
  },
  {
    id: 3,
    name: "Dr. Tanvi Rao",
    role: "Cardiologist",
    rating: 4.9,
    reviews: 120,
    nextSlot: "Today • 12:00 PM",
    featured: false,
    img: require("../../assets/images/doctor.png"),
  },
  {
    id: 4,
    name: "Dr. Rohan Mehta",
    role: "General Physician",
    rating: 4.6,
    reviews: 54,
    nextSlot: "Tomorrow • 09:00 AM",
    featured: false,
    img: require("../../assets/images/doctor.png"),
  },
=======
const ARTICLES = [
  {
    id: "a1",
    title: "Boost Your Immunity Naturally",
    img:
      "https://images.pexels.com/photos/414555/pexels-photo-414555.jpeg?auto=compress&fit=crop&w=800&q=60",
  },
  {
    id: "a2",
    title: "5 Yoga Poses for Daily Wellness",
    img:
      "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&fit=crop&w=800&q=60",
  },
];

const SPECIALISTS = [
  { id: "s1", name: "Dr. Kavita", role: "Dermatologist" },
  { id: "s2", name: "Dr. Amit", role: "Cardiologist" },
  { id: "s3", name: "Dr. Smita", role: "Nutritionist" },
>>>>>>> d1de87fdded42449ce63ba0066ee90b2dc0c680f
];

const HOSPITALS = [
  {
<<<<<<< HEAD
    id: 1,
    name: "Arogvo City Hospital",
    rating: 4.8,
    distance: "1.2 km",
    img: require("../../assets/images/hospital.png"),
  },
  {
    id: 2,
    name: "Sunrise Multi-Speciality",
    rating: 4.6,
    distance: "3.5 km",
    img: require("../../assets/images/hospital.png"),
  },
  {
    id: 3,
    name: "GreenLife Care Center",
    rating: 4.4,
    distance: "2.1 km",
    img: require("../../assets/images/hospital.png"),
  },
];

const NEWSLETTERS = [
  {
    id: 1,
    title: "5 science-backed ways to improve sleep",
    date: "2 days ago",
    img: require("../../assets/images/news.png"),
  },
  {
    id: 2,
    title: "How AI is changing medical diagnosis",
    date: "1 week ago",
    img: require("../../assets/images/news.png"),
  },
];

const TRENDS = [
  { title: "AI in Radiology", icon: "sparkles-outline" },
  { title: "Robotic Surgeries", icon: "hardware-chip-outline" },
  { title: "Wearable Diagnostics", icon: "watch-outline" },
  { title: "Telemedicine Growth", icon: "wifi-outline" },
  { title: "Smart Health Monitoring", icon: "pulse-outline" },
];

// ----------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------

export default function Explore() {
  return (
    <LinearGradient colors={["#2F7A6E", "#2F7A6E"]} style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* ---------------- HEADER ---------------- */}
        <View style={styles.headerContainer}>
          <View style={styles.headerRow}>
            <TouchableOpacity style={styles.menuBtn}>
              <Ionicons name="menu" size={26} color="#FFFFFF" />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Explore</Text>

            <TouchableOpacity style={styles.profileBtn}>
              <Image
                source={require("../../assets/images/profile.png")}
                style={styles.profileImg}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* ---------------- MAIN CONTENT AREA ---------------- */}
        <View style={styles.bodyArea}>

          {/* ==================================== */}
          {/*              DOCTORS GRID            */}
          {/* ==================================== */}

          <Text style={styles.sectionTitle}>Doctors & Appointments</Text>

          <View style={styles.doctorGrid}>
            {DOCTOR_APPOINTMENTS.map((doc) => (
              <View
                key={doc.id}
                style={[styles.docCard, doc.featured && styles.docCardFeatured]}
              >
                <View style={styles.docTopRow}>
                  <Image source={doc.img} style={styles.docAvatar} />

                  <View style={styles.docInfo}>
                    <Text
                      numberOfLines={1}
                      style={[styles.docName, doc.featured && styles.docNameFeatured]}
                    >
                      {doc.name}
                    </Text>

                    <Text
                      numberOfLines={1}
                      style={[styles.docRole, doc.featured && styles.docRoleFeatured]}
                    >
                      {doc.role}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.docArrowCircle,
                      doc.featured && styles.docArrowCircleFeatured,
                    ]}
                  >
                    <Ionicons name="chevron-forward" size={18} color="#0F6155" />
                  </View>
                </View>

                <View style={styles.docRatingRow}>
                  <View style={styles.docRatingLeft}>
                    <Ionicons
                      name="star"
                      size={14}
                      color={doc.featured ? "#FFE58B" : "#FFC65C"}
                    />
                    <Text
                      style={[styles.docRatingText, doc.featured && styles.docRatingTextFeatured]}
                    >
                      {doc.rating}
                    </Text>
                  </View>

                  <Text
                    style={[styles.docReviewText, doc.featured && styles.docReviewTextFeatured]}
                  >
                    {doc.reviews} reviews
                  </Text>
                </View>

                <View
                  style={[styles.nextSlotPill, doc.featured && styles.nextSlotPillFeatured]}
                >
                  <Ionicons name="time-outline" size={14} color="#0F6155" />
                  <Text
                    numberOfLines={1}
                    style={[styles.nextSlotText, doc.featured && styles.nextSlotTextFeatured]}
                  >
                    {doc.nextSlot}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          {/* ==================================== */}
          {/*              HOSPITALS               */}
          {/* ==================================== */}

          <Text style={styles.sectionTitle}>Hospitals Near You</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {HOSPITALS.map((h) => (
              <View key={h.id} style={styles.hospitalCard}>
                <Image source={h.img} style={styles.hospitalImg} />

                <Text numberOfLines={1} style={styles.hospitalName}>
                  {h.name}
                </Text>

                <View style={styles.hospitalMeta}>
                  <Ionicons name="star" size={14} color="#FFCB3B" />
                  <Text style={styles.hospitalText}>{h.rating}</Text>

                  <Ionicons name="location-outline" size={14} color="#0F6155" />
                  <Text style={styles.hospitalText}>{h.distance}</Text>
                </View>

                <TouchableOpacity style={styles.hospitalBtn}>
                  <Text style={styles.hospitalBtnText}>View Details</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

          {/* ==================================== */}
          {/*         PREMIUM NEWSLETTER           */}
          {/* ==================================== */}

          <Text style={styles.sectionTitle}>Medical Newsletter</Text>

          {NEWSLETTERS.map((n) => (
            <View key={n.id} style={styles.newsCardPremium}>
              <Image source={n.img} style={styles.newsImgPremium} />

              <View style={{ flex: 1 }}>
                <Text numberOfLines={2} style={styles.newsTitlePremium}>
                  {n.title}
                </Text>

                <Text style={styles.newsDatePremium}>{n.date}</Text>

                <TouchableOpacity style={styles.readMorePill}>
                  <Text style={styles.readMorePillText}>Read More →</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}

          {/* ==================================== */}
          {/*      PREMIUM MEDICATION REMINDER     */}
          {/* ==================================== */}

          <Text style={styles.sectionTitle}>Medication Reminder</Text>

          <LinearGradient
            colors={["#C8FFF0", "#92E6D5"]}
            style={styles.medCardPremium}
          >
            <View style={styles.medLeftIcon}>
              <Ionicons name="alarm-outline" size={26} color="#0F6155" />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.medTitlePremium}>Morning Medicines</Text>
              <Text style={styles.medSubtitlePremium}>
                Vitamin D & BP tablet • 8:00 AM daily
              </Text>
            </View>

            <TouchableOpacity style={styles.medEditBtn}>
              <Text style={styles.medEditText}>Edit</Text>
            </TouchableOpacity>
          </LinearGradient>

          {/* ==================================== */}
          {/*       PREMIUM EMERGENCY CARD         */}
          {/* ==================================== */}

          <Text style={styles.sectionTitle}>Emergency Helpline</Text>

          <LinearGradient
            colors={["#FF7B7B", "#FF4D4D"]}
            style={styles.emergencyPremium}
          >
            <View style={styles.emIconBadge}>
              <Ionicons name="alert-outline" size={22} color="#FF4D4D" />
            </View>

            <View style={{ flex: 1, marginLeft: 14 }}>
              <Text style={styles.emTitlePremium}>Need urgent help?</Text>
              <Text style={styles.emSubPremium}>
                Call 108 or Arogvo emergency line
              </Text>
            </View>

            <TouchableOpacity style={styles.emCallBtn}>
              <Text style={styles.emCallText}>Call Now</Text>
            </TouchableOpacity>
          </LinearGradient>

          {/* ==================================== */}
          {/*         PREMIUM ABOUT SECTION        */}
          {/* ==================================== */}

          <View style={styles.footerPremium}>
            <View style={styles.footerBadge}>
              <Ionicons name="leaf-outline" size={22} color="#0F6155" />
            </View>

            <Text style={styles.footerTitlePremium}>About Arogvo App</Text>

            <Text style={styles.footerDescPremium}>
              Arogvo simplifies healthcare with doctor bookings, reminders,
              trusted content, and organised wellness tracking — all in one
              clean, modern experience.
            </Text>

            <Text style={styles.footerBrandPremium}>
              Sehat Simplified • Team Arogvo
            </Text>
          </View>

          <View style={{ height: 40 }} />
        </View>
=======
    id: "h1",
    name: "Arogvo City Hospital",
    rating: 4.7,
    dist: "1.2 km",
    img:
      "https://images.pexels.com/photos/1170972/pexels-photo-1170972.jpeg?auto=compress&fit=crop&w=800&q=60",
  },
  {
    id: "h2",
    name: "GreenCare Medical Center",
    rating: 4.5,
    dist: "2.5 km",
    img:
      "https://images.pexels.com/photos/1170976/pexels-photo-1170976.jpeg?auto=compress&fit=crop&w=800&q=60",
  },
  {
    id: "h3",
    name: "Sunrise Clinic",
    rating: 4.3,
    dist: "3.1 km",
    img:
      "https://images.pexels.com/photos/2433151/pexels-photo-2433151.jpeg?auto=compress&fit=crop&w=800&q=60",
  },
];

const TIPS = [
  "Drink water every 30 minutes 💧",
  "Avoid heavy meals at night 🍽️",
  "Try 5 min deep breathing 🌿",
  "Walk 3,000 steps daily 🚶‍♂️",
];

export default function Explore() {
  return (
    <LinearGradient
      colors={["#E9FFFB", "#DDFBF7", "#ECFEFC"]}
      style={styles.screen}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.greet}>Hello,</Text>
            <Text style={styles.title}>Explore</Text>
          </View>
          <TouchableOpacity style={styles.profileBtn}>
            <Image
              source={{
                uri:
                  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&fit=crop&w=200&q=60",
              }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.searchWrap}>
          <LinearGradient
            colors={["#DFFCF7", "#CFF6F0"]}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.searchInner}
          >
            <Ionicons name="search" size={20} color="#0d9488" />
            <TextInput
              placeholder="Search health topics, symptoms, doctors..."
              placeholderTextColor="#0f766e"
              style={styles.searchInput}
            />
            <TouchableOpacity style={styles.micBtn}>
              <LinearGradient
                colors={["#2dd4bf", "#14b8a6"]}
                style={styles.micGradient}
              >
                <Ionicons name="mic" size={18} color="white" />
              </LinearGradient>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        {/* Trending Chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 12 }}
          contentContainerStyle={{ paddingRight: 10 }}
        >
          {["Wellness", "Heart", "Nutrition", "Mind", "Symptoms"].map(
            (chip, i) => (
              <LinearGradient
                key={i}
                colors={["#CCFBF1", "#A7F3D0"]}
                style={[styles.chip, i === 0 && styles.chipActive]}
              >
                <Text style={[styles.chipText, i === 0 && styles.chipTextActive]}>
                  {chip}
                </Text>
              </LinearGradient>
            )
          )}
        </ScrollView>

        {/* Featured Articles */}
        <Text style={styles.sectionTitle}>Featured Articles</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {ARTICLES.map((a, idx) => (
            <TouchableOpacity key={a.id} style={styles.articleCard}>
              <ImageBackground
                source={{ uri: a.img }}
                style={styles.articleImgBg}
                imageStyle={{ borderRadius: 18 }}
              >
                <LinearGradient
                  colors={["rgba(45,212,191,0.28)", "rgba(20,184,166,0.18)"]}
                  style={styles.articleOverlay}
                />
                <View style={styles.articleContent}>
                  <Text numberOfLines={2} style={styles.articleTitle}>
                    {a.title}
                  </Text>
                  <TouchableOpacity style={styles.articleBtn}>
                    <Text style={styles.articleBtnText}>Read Now</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* AI Recommendations */}
        <Text style={styles.sectionTitle}>AI Recommendations</Text>
        <View style={styles.aiCard}>
          <View style={styles.aiLeft}>
            <LinearGradient
              colors={["#2dd4bf", "#14b8a6"]}
              style={styles.aiIcon}
            >
              <Ionicons name="bulb" size={20} color="white" />
            </LinearGradient>
          </View>
          <View style={styles.aiBody}>
            <Text style={styles.aiTitle}>Improve your sleep quality</Text>
            <Text style={styles.aiSub}>Based on your recent activity</Text>
          </View>
          <TouchableOpacity style={styles.aiAction}>
            <Ionicons name="chevron-forward" size={22} color="#0f172a" />
          </TouchableOpacity>
        </View>

        {/* Tools Grid */}
        <Text style={styles.sectionTitle}>Tools</Text>
        <View style={styles.toolsGrid}>
          {["BMI", "Water", "Steps", "Symptoms", "Yoga", "Heart", "Period", "Medicine", "Sleep"].map(
            (tool, i) => (
              <View key={i} style={styles.toolBox}>
                <LinearGradient
                  colors={["rgba(45,212,191,0.15)", "rgba(20,184,166,0.08)"]}
                  style={styles.toolIconWrap}
                >
                  <MaterialIcons name="local-hospital" size={22} color="#0d9488" />
                </LinearGradient>
                <Text style={styles.toolText}>{tool}</Text>
              </View>
            )
          )}
        </View>

        {/* Top Hospitals Near You */}
        <View style={styles.hospHeader}>
          <Text style={styles.sectionTitle}>Top Hospitals Near You</Text>
          <TouchableOpacity style={styles.seeAllBtn}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          data={HOSPITALS}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingVertical: 6 }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.hospitalCard}>
              <ImageBackground
                source={{ uri: item.img }}
                style={styles.hospitalImg}
                imageStyle={{ borderRadius: 16 }}
              >
                <LinearGradient
                  colors={["rgba(0,0,0,0.12)", "rgba(0,0,0,0.02)"]}
                  style={styles.hospitalOverlay}
                />
                <View style={styles.hospitalInfo}>
                  <Text style={styles.hospitalName} numberOfLines={1}>
                    {item.name}
                  </Text>
                  <View style={styles.hospitalMeta}>
                    <View style={styles.hospitalRow}>
                      <Ionicons name="star" size={14} color="#FFD166" />
                      <Text style={styles.hospitalMetaText}>{item.rating}</Text>
                    </View>
                    <View style={styles.hospitalRow}>
                      <Ionicons name="location" size={14} color="white" />
                      <Text style={styles.hospitalMetaText}>{item.dist}</Text>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />

        {/* Tips Slider */}
        <Text style={styles.sectionTitle}>Health Tips</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {TIPS.map((t, i) => (
            <View key={i} style={styles.tipCard}>
              <Text style={styles.tipText}>{t}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Specialists */}
        <Text style={styles.sectionTitle}>Top Specialists</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {SPECIALISTS.map((s) => (
            <View key={s.id} style={styles.specialistCard}>
              <View style={styles.avatar}>
                <Image
                  source={{
                    uri:
                      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&fit=crop&w=200&q=60",
                  }}
                  style={styles.avatarImg}
                />
              </View>
              <Text style={styles.docName}>{s.name}</Text>
              <Text style={styles.docRole}>{s.role}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Videos */}
        <Text style={styles.sectionTitle}>Health Videos</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.videoCard}>
            <View style={styles.videoThumb}>
              <Ionicons name="play" size={36} color="white" />
            </View>
            <Text style={styles.videoLabel}>Morning Yoga</Text>
          </View>
          <View style={styles.videoCard}>
            <View style={styles.videoThumb}>
              <Ionicons name="play" size={36} color="white" />
            </View>
            <Text style={styles.videoLabel}>Breathing Exercise</Text>
          </View>
        </ScrollView>

        {/* Nutrition */}
        <Text style={styles.sectionTitle}>Nutrition</Text>
        <View style={styles.nutritionRow}>
          <View style={styles.nutritionCard}>
            <Text style={styles.nutritionText}>Healthy Breakfast</Text>
          </View>
          <View style={styles.nutritionCard}>
            <Text style={styles.nutritionText}>Low-carb Dinner</Text>
          </View>
        </View>

        <View style={{ height: 60 }} />
>>>>>>> d1de87fdded42449ce63ba0066ee90b2dc0c680f
      </ScrollView>
    </LinearGradient>
  );
}

<<<<<<< HEAD
// ----------------------------------------------------
// STYLES
// ----------------------------------------------------

const CARD_GAP = 14;
const DOC_CARD_WIDTH = (width - 20 * 2 - CARD_GAP) / 2;

const styles = StyleSheet.create({

  screen: { flex: 1 },

  // ---------------- HEADER ----------------
  headerContainer: {
    paddingTop: 55,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: "#2F7A6E",
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
=======
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    paddingTop: 48,
    paddingBottom: 30,
    paddingHorizontal: 18,
>>>>>>> d1de87fdded42449ce63ba0066ee90b2dc0c680f
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

<<<<<<< HEAD
  menuBtn: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  profileBtn: {
    width: 42,
    height: 42,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.18)",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  profileImg: { width: "100%", height: "100%", borderRadius: 16 },

  // ---------------- BODY ----------------
  bodyArea: {
    backgroundColor: "#F5FAF8",
    paddingHorizontal: 20,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    paddingTop: 24,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#06383A",
    marginBottom: 12,
  },

  // ----------------------------------------------------
  // DOCTOR GRID
  // ----------------------------------------------------

  doctorGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  docCard: {
    width: DOC_CARD_WIDTH,
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 12,
    marginBottom: CARD_GAP,
  },

  docCardFeatured: {
    backgroundColor: "#0AA189",
  },

  docTopRow: { flexDirection: "row", alignItems: "center" },

  docAvatar: { width: 40, height: 40, borderRadius: 16 },

  docInfo: { flex: 1, marginLeft: 8 },

  docName: { fontSize: 13, fontWeight: "800", color: "#062A2F" },

  docNameFeatured: { color: "#FFFFFF" },

  docRole: { fontSize: 11, color: "#066B71", marginTop: 2 },

  docRoleFeatured: { color: "rgba(255,255,255,0.9)" },

  docArrowCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#E5F4F0",
    alignItems: "center",
    justifyContent: "center",
  },

  docArrowCircleFeatured: { backgroundColor: "#FFFFFF" },

  docRatingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    alignItems: "center",
  },

  docRatingLeft: { flexDirection: "row", alignItems: "center" },

  docRatingText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: "700",
    color: "#0F6155",
  },

  docRatingTextFeatured: { color: "#FFFFFF" },

  docReviewText: { fontSize: 11, color: "#7A8B88" },

  docReviewTextFeatured: { color: "rgba(255,255,255,0.9)" },

  nextSlotPill: {
    marginTop: 8,
    borderRadius: 14,
    backgroundColor: "#E4F3EF",
    paddingVertical: 6,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  nextSlotPillFeatured: { backgroundColor: "#FFFFFF" },

  nextSlotText: {
    marginLeft: 6,
    fontSize: 11,
    fontWeight: "600",
    color: "#0F6155",
  },

  nextSlotTextFeatured: { color: "#0F6155" },

  // ----------------------------------------------------
  // HOSPITALS
  // ----------------------------------------------------

  hospitalCard: {
    width: 210,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 12,
    marginRight: 14,
  },

  hospitalImg: { width: "100%", height: 110, borderRadius: 16 },

  hospitalName: {
    fontWeight: "800",
    fontSize: 14,
    color: "#062A2F",
    marginTop: 10,
  },

  hospitalMeta: { flexDirection: "row", alignItems: "center", marginTop: 6 },

  hospitalText: {
    marginRight: 10,
    marginLeft: 4,
    fontSize: 12,
    fontWeight: "600",
    color: "#0F6155",
  },

  hospitalBtn: {
    marginTop: 10,
    backgroundColor: "#0F6155",
    paddingVertical: 8,
    borderRadius: 14,
    alignItems: "center",
  },

  hospitalBtnText: { color: "#FFFFFF", fontSize: 12, fontWeight: "700" },

  // ----------------------------------------------------
  // PREMIUM NEWSLETTER
  // ----------------------------------------------------

  newsCardPremium: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 20,
    padding: 12,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#C8EDE5",
    shadowColor: "#0F6155",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 2,
  },

  newsImgPremium: {
    width: 85,
    height: 85,
    borderRadius: 16,
    marginRight: 12,
  },

  newsTitlePremium: {
    fontSize: 16,
    fontWeight: "800",
    color: "#06383A",
  },

  newsDatePremium: {
    marginTop: 4,
    fontSize: 12,
    color: "#5A6A67",
  },

  readMorePill: {
    marginTop: 8,
    backgroundColor: "#DFF7F1",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignSelf: "flex-start",
  },

  readMorePillText: {
    color: "#0F6155",
    fontWeight: "700",
    fontSize: 12,
  },

  // ----------------------------------------------------
  // PREMIUM TRENDS
  // ----------------------------------------------------

  trendGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 12,
  },

  trendPremiumCard: {
    width: "48%",
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
    marginRight: "4%",
    flexDirection: "row",
    alignItems: "center",
  },

  trendPremiumText: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "700",
    color: "#0F6155",
  },

  // ----------------------------------------------------
  // PREMIUM MEDICATION REMINDER
  // ----------------------------------------------------

  medCardPremium: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderRadius: 22,
    marginBottom: 20,
    shadowColor: "#0F6155",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },

  medLeftIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  medTitlePremium: {
    fontWeight: "800",
    fontSize: 16,
    color: "#06383A",
  },

  medSubtitlePremium: {
    marginTop: 4,
    fontSize: 12,
    color: "#0F6155",
    opacity: 0.85,
  },

  medEditBtn: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: "#06483C",
    borderRadius: 14,
  },

  medEditText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 12,
  },

  // ----------------------------------------------------
  // PREMIUM EMERGENCY
  // ----------------------------------------------------

  emergencyPremium: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderRadius: 22,
    marginBottom: 20,
    shadowColor: "#FF4D4D",
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 4,
  },

  emIconBadge: {
    width: 45,
    height: 45,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
=======
  greet: {
    color: "#0f172a",
    opacity: 0.6,
    fontSize: 14,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#052e2a",
    marginTop: 4,
  },

  profileBtn: {
    width: 46,
    height: 46,
    borderRadius: 12,
    overflow: "hidden",
  },

  profileImage: {
    width: "100%",
    height: "100%",
  },

  // Search
  searchWrap: {
    marginTop: 18,
  },

  searchInner: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 16,
    shadowColor: "#0f766e",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#064e47",
  },

  micBtn: {
    marginLeft: 8,
  },

  micGradient: {
    padding: 8,
    borderRadius: 10,
>>>>>>> d1de87fdded42449ce63ba0066ee90b2dc0c680f
    alignItems: "center",
    justifyContent: "center",
  },

<<<<<<< HEAD
  emTitlePremium: {
    fontWeight: "800",
    fontSize: 17,
    color: "#FFFFFF",
  },

  emSubPremium: {
    fontSize: 13,
    color: "#FFFFFF",
    opacity: 0.9,
    marginTop: 3,
  },

  emCallBtn: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 14,
  },

  emCallText: {
    color: "#FF3B3B",
    fontWeight: "800",
    fontSize: 13,
  },

  // ----------------------------------------------------
  // PREMIUM FOOTER
  // ----------------------------------------------------

  footerPremium: {
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: 20,
    borderRadius: 22,
    marginTop: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#CFEDE5",
  },

  footerBadge: {
    width: 50,
    height: 50,
    backgroundColor: "#E7F7F2",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  footerTitlePremium: {
    fontSize: 18,
    fontWeight: "800",
    color: "#06383A",
  },

  footerDescPremium: {
    textAlign: "center",
    marginTop: 8,
    fontSize: 13,
    color: "#0F6155",
    lineHeight: 20,
  },

  footerBrandPremium: {
    marginTop: 12,
    fontWeight: "700",
    fontSize: 13,
    color: "#0F6155",
=======
  // Chips
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "transparent",
  },

  chipActive: {
    borderColor: "rgba(20,184,166,0.12)",
  },

  chipText: {
    color: "#064e47",
    fontWeight: "600",
  },

  chipTextActive: {
    color: "#064e47",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#053D38",
    marginTop: 18,
    marginBottom: 10,
  },

  // Articles
  articleCard: {
    width: width * 0.72,
    height: 190,
    borderRadius: 18,
    marginRight: 14,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#0f766e",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  articleImgBg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },

  articleOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 18,
  },

  articleContent: {
    padding: 14,
  },

  articleTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "800",
    textShadowColor: "rgba(0,0,0,0.15)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 6,
  },

  articleBtn: {
    marginTop: 8,
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.12)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
  },

  articleBtnText: {
    color: "white",
    fontWeight: "700",
  },

  // AI Card
  aiCard: {
    marginTop: 8,
    backgroundColor: "white",
    borderRadius: 14,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#0f766e",
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
  },

  aiIcon: {
    width: 52,
    height: 52,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  aiLeft: {
    marginRight: 12,
  },

  aiBody: {
    flex: 1,
  },

  aiTitle: {
    fontWeight: "800",
    color: "#064e47",
    fontSize: 16,
  },

  aiSub: {
    color: "#0f766e",
    opacity: 0.8,
    fontSize: 13,
    marginTop: 4,
  },

  aiAction: {
    marginLeft: 8,
  },

  // Tools
  toolsGrid: {
    marginTop: 6,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  toolBox: {
    width: "30%",
    alignItems: "center",
    marginBottom: 12,
  },

  toolIconWrap: {
    padding: 12,
    borderRadius: 12,
  },

  toolText: {
    marginTop: 8,
    fontWeight: "700",
    color: "#064e47",
    fontSize: 13,
  },

  // Hospitals
  hospHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  seeAllBtn: {
    paddingHorizontal: 8,
    paddingVertical: 6,
  },

  seeAllText: {
    color: "#0d9488",
    fontWeight: "700",
  },

  hospitalCard: {
    width: 200,
    height: 130,
    borderRadius: 16,
    overflow: "hidden",
    marginRight: 12,
    backgroundColor: "#fff",
    elevation: 3,
  },

  hospitalImg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },

  hospitalOverlay: {
    ...StyleSheet.absoluteFillObject,
  },

  hospitalInfo: {
    padding: 10,
    backgroundColor: "transparent",
  },

  hospitalName: {
    color: "white",
    fontWeight: "800",
    fontSize: 15,
    textShadowColor: "rgba(0,0,0,0.18)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 6,
  },

  hospitalMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  hospitalMetaText: {
    color: "white",
    marginLeft: 6,
    fontWeight: "700",
  },

  hospitalRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  // Tips
  tipCard: {
    backgroundColor: "#CCFBF1",
    padding: 14,
    borderRadius: 14,
    marginRight: 12,
    minWidth: 150,
  },

  tipText: {
    fontWeight: "700",
    color: "#064e47",
  },

  // Specialists
  specialistCard: {
    width: 120,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 10,
    marginRight: 12,
    alignItems: "center",
    elevation: 2,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 8,
    backgroundColor: "#E6FFFA",
  },

  avatarImg: {
    width: "100%",
    height: "100%",
  },

  docName: {
    fontWeight: "800",
    fontSize: 14,
    color: "#052e2a",
  },

  docRole: {
    fontSize: 12,
    color: "#065f56",
    opacity: 0.85,
  },

  // Videos
  videoCard: {
    width: 160,
    marginRight: 12,
  },

  videoThumb: {
    width: "100%",
    height: 100,
    borderRadius: 12,
    backgroundColor: "#2dd4bf",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },

  videoLabel: {
    marginTop: 8,
    fontWeight: "700",
    color: "#052e2a",
  },

  // Nutrition
  nutritionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  nutritionCard: {
    width: "48%",
    backgroundColor: "#E6FFFA",
    padding: 14,
    borderRadius: 12,
  },

  nutritionText: {
    fontWeight: "800",
    color: "#064e47",
>>>>>>> d1de87fdded42449ce63ba0066ee90b2dc0c680f
  },
});
