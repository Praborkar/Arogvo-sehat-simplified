// app/(tabs)/appointments.tsx

import { auth, db } from "@/config/firebase";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

const PRIMARY = "#0C5D5F";
const LIGHT = "#F4F7FB";
const WHITE = "#FFFFFF";

export default function AppointmentsScreen() {
  const router = useRouter();
  const user = auth.currentUser;

  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    async function loadAppointments() {
      try {
        const q = query(
          collection(db, "appointments"),
          where("patientUid", "==", user.uid)
        );
        const snap = await getDocs(q);
        const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setAppointments(list);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    loadAppointments();
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* ------------------------------ HEADER ------------------------------ */}
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>My Appointments</Text>

        {/* Tabs */}
        <View style={styles.tabsRow}>
          <TouchableOpacity style={styles.tabActive}>
            <Text style={styles.tabActiveText}>Upcoming</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabInactive}>
            <Text style={styles.tabInactiveText}>Past</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ------------------------------ UPCOMING APPOINTMENTS ------------------------------ */}
      <View style={{ paddingTop: 10, paddingHorizontal: 18 }}>
        {loading ? (
          <Text style={{ textAlign: "center", color: "#7A8A8F", marginTop: 20 }}>
            Loading...
          </Text>
        ) : appointments.length === 0 ? (
          <View style={styles.emptyCard}>
            <Ionicons name="calendar-outline" size={30} color="#7A8A8F" />
            <Text style={styles.emptyText}>No appointments booked yet.</Text>
            <TouchableOpacity
              style={styles.bookBtn}
              onPress={() => router.push("/(tabs)/book")}
            >
              <Text style={styles.bookBtnText}>Book Appointment</Text>
            </TouchableOpacity>
          </View>
        ) : (
          appointments.map((a) => (
            <Animated.View
              entering={FadeInUp.delay(80)}
              key={a.id}
              style={styles.appointmentCard}
            >
              {/* Doctor Image */}
              <Image
                source={
                  a.doctorImage
                    ? { uri: a.doctorImage }
                    : require("../../assets/images/doctor.png")
                }
                style={styles.doctorImg}
              />

              <View style={{ flex: 1, marginLeft: 14 }}>
                <Text style={styles.doctorName}>{a.doctorName}</Text>
                <Text style={styles.doctorSpeciality}>{a.speciality}</Text>

                {/* Date & Time row */}
                <View style={styles.infoRow}>
                  <Ionicons name="calendar-outline" size={16} color={PRIMARY} />
                  <Text style={styles.infoText}>{a.date}</Text>
                </View>

                <View style={styles.infoRow}>
                  <Ionicons name="time-outline" size={16} color={PRIMARY} />
                  <Text style={styles.infoText}>{a.time}</Text>
                </View>

                {/* Status */}
                <View style={[styles.statusBadge, { backgroundColor: "#E1F4F2" }]}>
                  <Text style={styles.statusText}>Upcoming</Text>
                </View>
              </View>

              <Ionicons name="chevron-forward" size={22} color="#90A4AE" />
            </Animated.View>
          ))
        )}
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

/* ------------------------------ Styles ------------------------------ */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT,
  },

  /* HEADER */
  headerWrapper: {
    backgroundColor: PRIMARY,
    paddingTop: Platform.OS === "android" ? 50 : 60,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 18,
  },

  headerTitle: {
    color: WHITE,
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 16,
  },

  /* TABS */
  tabsRow: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 4,
    borderRadius: 30,
    alignSelf: "flex-start",
  },

  tabActive: {
    backgroundColor: WHITE,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 30,
  },

  tabActiveText: {
    color: PRIMARY,
    fontWeight: "700",
  },

  tabInactive: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 30,
  },

  tabInactiveText: {
    color: WHITE,
    opacity: 0.8,
  },

  /* APPOINTMENT CARD */
  appointmentCard: {
    flexDirection: "row",
    backgroundColor: WHITE,
    padding: 14,
    borderRadius: 18,
    elevation: 4,
    marginBottom: 16,
    alignItems: "center",
  },

  doctorImg: {
    width: 60,
    height: 60,
    borderRadius: 14,
  },

  doctorName: {
    fontSize: 17,
    fontWeight: "700",
    color: PRIMARY,
  },

  doctorSpeciality: {
    color: "#7A8A8F",
    marginBottom: 6,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },

  infoText: {
    marginLeft: 6,
    color: "#475A60",
  },

  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginTop: 8,
  },

  statusText: {
    color: PRIMARY,
    fontSize: 12,
    fontWeight: "700",
  },

  /* EMPTY STATE */
  emptyCard: {
    backgroundColor: WHITE,
    padding: 24,
    borderRadius: 20,
    elevation: 4,
    alignItems: "center",
    marginTop: 20,
  },

  emptyText: {
    marginTop: 10,
    color: "#90A4AE",
    fontSize: 14,
  },

  bookBtn: {
    marginTop: 14,
    backgroundColor: PRIMARY,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },

  bookBtnText: {
    color: WHITE,
    fontWeight: "600",
  },
});
