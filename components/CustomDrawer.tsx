import { auth } from "@/config/firebase";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import { Link, usePathname, useRouter } from "expo-router";
import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { logout } from "../app/(auth)/logout";

const PRIMARY = "#0C5D5F";
const TEXT = "#222";
const TEAL_GRADIENT = ["#0C5D5F", "#2AA29B"];

export default function CustomDrawer(props: any) {
  const user = auth.currentUser;
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      props.navigation.closeDrawer();
      router.replace("/(auth)/login");
    } catch (e) {
      console.log("Logout error:", e);
    }
  };

  return (
    <LinearGradient colors={["#E8F9F7", "#FFFFFF"]} style={styles.container}>
      <DrawerContentScrollView {...props}>

        {/* 🌟 PREMIUM GLASS CARD */}
        <LinearGradient
          colors={["#FFFFFFDD", "#ECFDFC"]}
          style={styles.card}
        >
          {/* PROFILE HEADER */}
          <View style={styles.profileContainer}>
            <Image
              source={
                user?.photoURL
                  ? { uri: user.photoURL }
                  : require("../assets/images/profile.png")
              }
              style={styles.avatar}
            />

            <View>
              <Text style={styles.name}>{user?.displayName || "Guest User"}</Text>
              <Text style={styles.email}>{user?.email}</Text>
            </View>
          </View>

          {/* EDIT PROFILE */}
          <Link href="/(drawer)/profile" asChild>
            <TouchableOpacity style={styles.editProfileBtn}>
              <LinearGradient
                colors={["#DFF5F3", "#BDEBE7"]}
                style={styles.editGradient}
              >
                <Text style={styles.editProfileText}>Edit Profile</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Link>

          <View style={styles.divider} />

          {/* MENU ITEMS */}
          {DrawerItem("/(drawer)/home", "Home", pathname)}
          {DrawerItem("/(drawer)/explore", "Explore", pathname)}
          {DrawerItem("/(drawer)/appointments", "Appointments", pathname)}
          {DrawerItem("/(drawer)/reports", "Medical Reports", pathname)}
          {DrawerItem("/(drawer)/settings", "Settings", pathname)}
          {DrawerItem("/(drawer)/help", "Help & Support", pathname)}

          <View style={styles.divider} />

          {/* LOGOUT */}
          <TouchableOpacity onPress={handleLogout} style={styles.logoutBtn}>
            <LinearGradient
              colors={["#FFCCCC", "#FF9C9C"]}
              style={styles.logoutGradient}
            >
              <Text style={styles.logoutLabel}>Logout</Text>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>

        <Text style={styles.versionText}>Arogvo v1.0.0</Text>
      </DrawerContentScrollView>
    </LinearGradient>
  );
}

/* -------- DRAWER ITEM -------- */
function DrawerItem(href, label, pathname) {
  const active = pathname === href;

  return (
    <Link href={href} asChild key={href}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.itemRow,
          active && styles.activeRow,
        ]}
      >
        {active && <View style={styles.activeIndicator} />}
        <Text style={[styles.itemLabel, active && styles.activeLabel]}>
          {label}
        </Text>
      </TouchableOpacity>
    </Link>
  );
}

/* -------- STYLES -------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  /* GLASS CARD */
  card: {
    borderRadius: 26,
    paddingVertical: 20,
    paddingHorizontal: 20,
    margin: 16,
    backgroundColor: "#FFFFFFAA",
    ...Platform.select({
      ios: {
        shadowColor: "#0C5D5F",
        shadowOpacity: 0.2,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 8 },
      },
      android: { elevation: 12 },
    }),
  },

  /* PROFILE */
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 10,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 35,
    backgroundColor: "#D9F3F1",
  },

  name: {
    fontSize: 20,
    fontWeight: "800",
    color: PRIMARY,
  },

  email: {
    fontSize: 13,
    color: "#555",
    marginTop: 2,
  },

  /* EDIT PROFILE */
  editProfileBtn: {
    marginVertical: 14,
  },

  editGradient: {
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },

  editProfileText: {
    color: PRIMARY,
    fontWeight: "700",
    fontSize: 15,
  },

  /* DIVIDER */
  divider: {
    height: 2,
    backgroundColor: "#DDEEEE",
    marginVertical: 22,
  },

  /* MENU ITEMS */
  itemRow: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    backgroundColor: "rgba(255,255,255,0.6)",
  },

  activeRow: {
    backgroundColor: "rgba(12,93,95,0.18)",
    transform: [{ scale: 1.02 }],
  },

  activeIndicator: {
    width: 6,
    height: "75%",
    backgroundColor: PRIMARY,
    borderRadius: 10,
    marginRight: 10,
  },

  itemLabel: {
    fontSize: 18,
    color: TEXT,
    fontWeight: "500",
  },

  activeLabel: {
    color: PRIMARY,
    fontWeight: "800",
  },

  /* LOGOUT */
  logoutBtn: {
    marginTop: 6,
  },

  logoutGradient: {
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },

  logoutLabel: {
    fontSize: 17,
    color: "#000000ff",
    fontWeight: "800",
  },

  /* VERSION */
  versionText: {
    textAlign: "center",
    marginTop: 14,
    marginBottom: 30,
    fontSize: 12,
    color: "#666",
  },
});
