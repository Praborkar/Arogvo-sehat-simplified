// Explore.js
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

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
];

const HOSPITALS = [
  {
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
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    paddingTop: 48,
    paddingBottom: 30,
    paddingHorizontal: 18,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

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
    alignItems: "center",
    justifyContent: "center",
  },

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
  },
});
