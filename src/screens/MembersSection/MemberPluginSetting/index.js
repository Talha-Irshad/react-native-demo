import { ScrollView, View } from 'react-native'
import React from 'react'
import { Container, Header, SizedBox, Text } from '@components'
import { styles } from './index.styles'
import { appointment_scheduling_icon, daily_routine_icon, email_icon, emergency_medical_icon, emergency_partner_icon, fall_down_icon, geofence_alert_icon, geovoice_icon, medication_reminder_icon, room_beacon_icon, school_notices_icon, security_icon, shopping_icon, sos_icon, transportation_services_icon } from '@assets/icons'
import { SinglePluginRow } from './component'
import { COLORS, SIZES } from '@constants'

const MemberPluginSetting = () => {
    return (
        <Container>
            <Header title={"Plugin Settings"} />
            <View style={styles.main_view} >
                <ScrollView>

                    <SizedBox />

                    <Text
                        size={SIZES.h18}
                        ml={SIZES.padding}
                        text={"Plugin settings for Dad"} />

                    <SizedBox />

                    <Text
                        ml={SIZES.padding}
                        color={COLORS.text_orange_color}
                        text={"Health Management (AI)"} />

                    <SinglePluginRow
                        icon={medication_reminder_icon}
                        title={"Medication Reminders"}
                    />
                    <SinglePluginRow
                        icon={appointment_scheduling_icon}
                        title={"Appointment Scheduling"}
                    />
                    <SinglePluginRow
                        icon={emergency_medical_icon}
                        title={"Emergency Medical Information"}
                    />

                    <SizedBox />
                    <Text
                        ml={SIZES.padding}
                        color={COLORS.text_orange_color}
                        text={"Daily Assistant (AI)"} />

                    <SinglePluginRow
                        icon={transportation_services_icon}
                        title={"Transportation Services "}
                    />
                    <SinglePluginRow
                        icon={daily_routine_icon}
                        title={"Daily Routine Alerts"}
                    />
                    <SinglePluginRow
                        icon={shopping_icon}
                        title={"Shopping"}
                    />
                    <SinglePluginRow
                        icon={school_notices_icon}
                        title={"School notices"}
                    />
                    <SinglePluginRow
                        icon={email_icon}
                        title={"E-mails"}
                    />


                    <SizedBox />
                    <Text
                        ml={SIZES.padding}
                        color={COLORS.text_orange_color}
                        text={"Emergency Assistant & Location (AI) "} />


                    <SinglePluginRow
                        icon={fall_down_icon}
                        title={"Fall Down Alert"}
                    />
                    <SinglePluginRow
                        icon={sos_icon}
                        title={"Emergency Response"}
                    />
                    <SinglePluginRow
                        icon={emergency_partner_icon}
                        title={"Emergency Partners"}
                    />
                    <SinglePluginRow
                        icon={room_beacon_icon}
                        title={"Room Beacon Location"}
                    />

                    <SizedBox />

                    <Text
                        ml={SIZES.padding}
                        color={COLORS.text_orange_color}
                        text={"GeoFence & GeoVoice Alert (AI)"} />


                    <SinglePluginRow
                        icon={geofence_alert_icon}
                        title={"GeoFence Alert"}
                    />
                    <SinglePluginRow
                        icon={geovoice_icon}
                        title={"GeoVoice Note"}
                    />
                    <SinglePluginRow
                        icon={security_icon}
                        title={"Security"}
                    />


                    <SizedBox />
                    <SizedBox />

                </ScrollView>
            </View>
        </Container>
    )
}

export default MemberPluginSetting