// ProfileScreenStyled.tsx 
import React, { useState } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

const profileLocalImage = require("../../assets/images/profile.png");

// Enable LayoutAnimation for Android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const COLORS = {
  primary: "#0C5D5F",
  mint: "#E7F4F4",
  softMint: "#ECF8F7",
  pageBg: "#F4F8F7",
  white: "#FFFFFF",
  textPrimary: "#083938",
  textMuted: "#587675",
};

type TabType = "overview" | "personal" | "medical";

export default function ProfileScreenStyled(): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [editingMode, setEditingMode] = useState(false);

  const [profile, setProfile] = useState({
    name: "Praborkar",
    country: "India",
    email: "prabork@gmail.com",
    phone: "+91 99999 99999",
    healthId: "AH-1234-5678",
    allergies: "None",
    chronic: "None",
  });

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

        {/* -------------------- TOP CURVED PROFILE CARD -------------------- */}
        <View style={styles.profileHeader}>
          
          {/* header icons */}
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.headerIconBtn}>
              <Icon name="arrow-back" size={20} color="#fff" />
            </TouchableOpacity>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.headerIconBtn}>
                <Icon name="heart-outline" size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerIconBtn}>
                <Icon name="share-social-outline" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          {/* avatar */}
          <View style={styles.profileTopArea}>
            <View style={styles.profileImageWrapper}>
              <Image source={profileLocalImage} style={styles.profileImage} />
              <TouchableOpacity style={styles.editPhotoBtn}>
                <Icon name="camera-outline" size={16} color="#fff" />
              </TouchableOpacity>
            </View>

            <Text style={styles.doctorName}>{profile.name}</Text>
            <Text style={styles.doctorSub}>{profile.email}</Text>
          </View>

        </View>

        {/* ------------------- BODY SECTION ------------------- */}
        <View style={styles.bodyContainer}>

          {/* Edit Profile Button */}
          <TouchableOpacity
            style={styles.editProfileBigBtn}
            onPress={() => setEditingMode((s) => !s)}
          >
            <Text style={styles.editProfileBigText}>
              {editingMode ? "Save Profile" : "Edit Profile"}
            </Text>
          </TouchableOpacity>

          {/* ---------------- TABS ---------------- */}
          <View style={styles.tabs}>
            <TouchableOpacity style={styles.tabItem} onPress={() => setActiveTab("overview")}>
              <Text style={[styles.tabText, activeTab === "overview" && styles.tabTextActive]}>Overview</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem} onPress={() => setActiveTab("personal")}>
              <Text style={[styles.tabText, activeTab === "personal" && styles.tabTextActive]}>Personal</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem} onPress={() => setActiveTab("medical")}>
              <Text style={[styles.tabText, activeTab === "medical" && styles.tabTextActive]}>Medical</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tabIndicatorWrap}>
            <View
              style={[
                styles.tabIndicator,
                activeTab === "overview" ? { left: 6 } : 
                activeTab === "personal" ? { left: "34%" } : 
                { left: "66%" },
              ]}
            />
          </View>

          {/* ---------------- TAB CONTENT ---------------- */}
          <View style={styles.tabContent}>

            {/* -------- Overview -------- */}
            {activeTab === "overview" && (
              <>
                <Text style={styles.sectionHeading}>Health Insights</Text>

                <View style={insightStyles.wrapper}>
                  
                  <InsightCard title="ECG" value="Normal" icon="pulse-outline" />
                  <InsightCard title="Medical ID" value={profile.healthId} icon="person-outline" />
                  <InsightCard title="BMI" value="22.5" icon="barbell-outline" />
                  <InsightCard title="Oxygen Level" value="98%" icon="water-outline" />

                </View>

                {/* Appointment History */}
                <View style={{ marginTop: 12 }}>
                  <Text style={styles.sectionHeading}>Appointment History</Text>

                  <View style={localStyles.scheduleCard}>
                    <Text style={localStyles.scheduleTitle}>Clinic Visit — ENT</Text>
                    <Text style={localStyles.scheduleSub}>Dr. Jennifer</Text>
                  </View>

                  <View style={localStyles.scheduleCard}>
                    <Text style={localStyles.scheduleTitle}>Dental Checkup</Text>
                    <Text style={localStyles.scheduleSub}>Dr. Rahul</Text>
                  </View>

                </View>

                {/* Medical Reports */}
                <View style={{ marginTop: 12 }}>
                  <Text style={styles.sectionHeading}>Medical Reports</Text>

                  <View style={localStyles.reportCard}>
                    <View style={localStyles.reportIcon}>
                      <Icon name="document-text-outline" size={18} color={COLORS.primary} />
                    </View>
                    <View style={{ marginLeft: 12 }}>
                      <Text style={localStyles.reportTitle}>General Health</Text>
                      <Text style={localStyles.reportSub}>8 files</Text>
                    </View>
                  </View>

                  <View style={localStyles.reportCard}>
                    <View style={localStyles.reportIcon}>
                      <Icon name="document-text-outline" size={18} color={COLORS.primary} />
                    </View>
                    <View style={{ marginLeft: 12 }}>
                      <Text style={localStyles.reportTitle}>Diabetes</Text>
                      <Text style={localStyles.reportSub}>4 files</Text>
                    </View>
                  </View>

                </View>

              </>
            )}

            {/* -------- Personal (NEUMORPHIC) -------- */}
            {activeTab === "personal" && (
              <View style={localStyles.neuCard}>

                <View style={localStyles.neuRow}>
                  <View style={localStyles.neuIcon}>
                    <Icon name="person-outline" size={20} color={COLORS.primary} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={localStyles.neuLabel}>Name</Text>
                    <Text style={localStyles.neuValue}>{profile.name}</Text>
                  </View>
                </View>

                <View style={localStyles.divider} />

                <View style={localStyles.neuRow}>
                  <View style={localStyles.neuIcon}>
                    <Icon name="mail-outline" size={20} color={COLORS.primary} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={localStyles.neuLabel}>Email</Text>
                    <Text style={localStyles.neuValue}>{profile.email}</Text>
                  </View>
                </View>

                <View style={localStyles.divider} />

                <View style={localStyles.neuRow}>
                  <View style={localStyles.neuIcon}>
                    <Icon name="call-outline" size={20} color={COLORS.primary} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={localStyles.neuLabel}>Phone</Text>
                    <Text style={localStyles.neuValue}>{profile.phone}</Text>
                  </View>
                </View>

                <View style={localStyles.divider} />

                <View style={localStyles.neuRow}>
                  <View style={localStyles.neuIcon}>
                    <Icon name="flag-outline" size={20} color={COLORS.primary} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={localStyles.neuLabel}>Country</Text>
                    <Text style={localStyles.neuValue}>{profile.country}</Text>
                  </View>
                </View>

              </View>
            )}

            {/* -------- Medical (NEUMORPHIC) -------- */}
            {activeTab === "medical" && (
              <View style={localStyles.neuCard}>

                <View style={localStyles.neuRow}>
                  <View style={localStyles.neuIcon}>
                    <Icon name="id-card-outline" size={20} color={COLORS.primary} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={localStyles.neuLabel}>Medical ID</Text>
                    <Text style={localStyles.neuValue}>{profile.healthId}</Text>
                  </View>
                </View>

                <View style={localStyles.divider} />

                <View style={localStyles.neuRow}>
                  <View style={localStyles.neuIcon}>
                    <Icon name="alert-circle-outline" size={20} color={COLORS.primary} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={localStyles.neuLabel}>Allergies</Text>
                    <Text style={localStyles.neuValue}>{profile.allergies}</Text>
                  </View>
                </View>

                <View style={localStyles.divider} />

                <View style={localStyles.neuRow}>
                  <View style={localStyles.neuIcon}>
                    <Icon name="medkit-outline" size={20} color={COLORS.primary} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={localStyles.neuLabel}>Chronic Conditions</Text>
                    <Text style={localStyles.neuValue}>{profile.chronic}</Text>
                  </View>
                </View>

              </View>
            )}

          </View>

        </View>

        <View style={{ height: 60 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------------- Insight Cards ---------------- */

function InsightCard({ title, value, icon }: any) {
  return (
    <View style={insightStyles.card}>
      <View style={insightStyles.iconWrap}>
        <Icon name={icon} size={20} color={COLORS.primary} />
      </View>

      <Text style={insightStyles.title}>{title}</Text>
      <Text style={insightStyles.value}>{value}</Text>

      <TouchableOpacity style={insightStyles.button}>
        <Text style={insightStyles.buttonText}>View</Text>
      </TouchableOpacity>
    </View>
  );
}

/* ---------------- Styles ---------------- */

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.pageBg },
  container: { paddingBottom: 10 },

  /* Header card */
  profileHeader: {
    backgroundColor: COLORS.primary,
    paddingTop: 20,
    paddingBottom: 18,
    paddingHorizontal: 25,
    borderRadius: 18,
    marginTop: 16,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 10,
    elevation: 5,
  },

  headerActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerIconBtn: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.18)",
    justifyContent: "center",
    alignItems: "center",
  },

  profileTopArea: {
    marginTop: 20,
    alignItems: "center",
  },

  profileImageWrapper: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "rgba(24, 117, 230, 0.25)",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },

  editPhotoBtn: {
    position: "absolute",
    bottom: 4,
    right: 4,
    backgroundColor: COLORS.primary,
    padding: 6,
    borderRadius: 20,
  },

  doctorName: {
    color: "#fff",
    marginTop: 12,
    fontSize: 20,
    fontWeight: "800",
  },
  doctorSub: {
    color: "rgba(255,255,255,0.85)",
    marginTop: 4,
    fontSize: 13,
  },

  bodyContainer: { paddingHorizontal: 16, paddingTop: 20 },

  editProfileBigBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  editProfileBigText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  tabs: {
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tabItem: { flex: 1, alignItems: "center", paddingVertical: 10 },
  tabText: { color: COLORS.textMuted, fontWeight: "700" },
  tabTextActive: { color: COLORS.primary },

  tabIndicatorWrap: { height: 6, marginTop: 6, marginBottom: 12, position: "relative" },
  tabIndicator: {
    width: "28%",
    height: 6,
    backgroundColor: COLORS.primary,
    borderRadius: 6,
    position: "absolute",
    top: 0,
  },

  tabContent: { marginTop: 8 },
  sectionHeading: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.textPrimary,
    marginBottom: 10,
  },
});

/* ---------------- Local Styles ---------------- */

const localStyles = StyleSheet.create({

  /* ---------------- Neumorphic card ---------------- */
  neuCard: {
    backgroundColor: COLORS.white,
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  neuRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  neuIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: COLORS.softMint,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  neuLabel: {
    fontSize: 13,
    color: COLORS.textMuted,
    marginBottom: 3,
  },
  neuValue: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.textPrimary,
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.06)",
    marginVertical: 12,
  },

  /* appointment cards */
  scheduleCard: {
    backgroundColor: "#166357ff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  scheduleTitle: { fontWeight: "700", color: "#eaeaeaff" },
  scheduleSub: { color: "#aaece2ff", marginTop: 4 },

  /* reports */
  reportCard: {
    backgroundColor: "#aaece2ff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  reportIcon: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: COLORS.mint,
    justifyContent: "center",
    alignItems: "center",
  },
  reportTitle: { fontWeight: "700", color: COLORS.textPrimary },
  reportSub: { marginTop: 4, color: COLORS.textMuted },
});

/* ---------------- Insight Card Styles ---------------- */

const insightStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#aaece2ff",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.09,
    shadowRadius: 20,
    elevation: 5,
  },

  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: COLORS.mint,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  title: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.textPrimary,
  },

  value: {
    fontSize: 18,
    fontWeight: "800",
    marginTop: 4,
    color: COLORS.primary,
  },

  button: {
    marginTop: 12,
    backgroundColor: "#f6f6f6ff",
    paddingVertical: 6,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#000000ff",
    fontWeight: "700",
    fontSize: 12,
  },
});
