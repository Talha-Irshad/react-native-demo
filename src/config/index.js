import { billing_icon, notification_icon, settings_icon, support_icon, users_icon } from "../assets/icons"
import { images, SIZES } from "../constants"
import { isIOS } from "../constants/theme"
import { navigate, resetNavigationStack } from "../navigation/service"
import { logout } from "../utils/auth.util"

export const TextWeights = {
    regular: "Inter18pt-Regular",
    medium: "Inter18pt-Medium",
    bold: "Inter18pt-Bold",
    light: "Inter18pt-Light",
    semibold: "Inter18pt-SemiBold",
    thin: "Inter18pt-Thin"
}
export const genders = [
    {
        id: 1,
        title: "Male"
    },
    {
        id: 2,
        title: "Female"
    }
]
export const dashboardArray = [
    {
        id: 1,
        text: "5",
        imageHeight: SIZES.padding * 5,
        image: images.message_image,
        title: "Messages",
        onPress: () => { },
        description: "Recent Messages",
        marginTop: -SIZES.padding * 2,
        marginLeft: SIZES.padding2
    },
    {
        id: 2,
        imageHeight: SIZES.padding * 6,
        image: images.device_image,
        marginTop: SIZES.padding * 1.5,
        title: "My Guardians",
        onPress: () => { },
        description: "Linked Guardians"
    },
    {
        id: 3,
        imageHeight: SIZES.padding * 4,
        image: images.wallet_image,
        title: "Your Wallet",
        marginTop: SIZES.padding * 1.5,
        onPress: () => navigate("Wallet"),
        description: "Your Available Wallet Balance"
    },
    {
        id: 4,
        imageHeight: isIOS ? SIZES.padding * 7 : SIZES.padding * 6.8,
        image: images.family_image,
        title: "Members",
        onPress: () => navigate("Members"),
        description: "Guardian Users",
    },
    {
        id: 5,
        text: "3",
        title: "Available\nSolutions",
        onPress: () => { },
        description: "Guardian Solutions"
    },
    {
        id: 6,
        imageHeight: SIZES.padding * 5,
        image: images.plans_image,
        title: "Plans",
        onPress: () => { },
        description: "Current Active Plan",
        marginTop: SIZES.padding * 1.5,
    },
    {
        id: 7,
        icon: settings_icon,
        title: "My Settings",
        onPress: () => { },
        description: "Account Settings"
    },
    {
        id: 8,
        icon: notification_icon,
        title: "Notifications",
        onPress: () => { },
        description: "Recent notifications"
    },
    {
        id: 9,
        icon: users_icon,
        title: "Users",
        onPress: () => { },
        description: "Additional app users"
    },
    {
        id: 10,
        icon: support_icon,
        title: "Support",
        onPress: () => { },
        description: "Contact Support"
    },
    {
        id: 11,
        icon: billing_icon,
        title: "Billing",
        onPress: () => { },
        description: "Invoicing and Statements"
    },
    {
        id: 12,
        title: "Disputes",
        onPress: () => { },
        description: "Payment Dispute",
        text: "none"
    },
    {
        id: 12,
        title: "Logout",
        description: "Logout",
        text: "none",
    },

]
export const transactions = [
    {
        id: 1,
        date: "2022-01-15",
        description: "Grocery Store Purchase",
        amount: "$50.00"
    },
    {
        id: 2,
        date: "2022-01-15",
        description: "Grocery Store Purchase",
        amount: "$50.00"
    },
    {
        id: 3,
        date: "2022-01-15",
        description: "Grocery Store Purchase",
        amount: "$50.00"
    },
    {
        id: 4,
        date: "2022-01-15",
        description: "Grocery Store Purchase",
        amount: "$50.00"
    },
    {
        id: 5,
        date: "2022-01-15",
        description: "Grocery Store Purchase",
        amount: "$50.00"
    },
    {
        id: 6,
        date: "2022-01-15",
        description: "Grocery Store Purchase",
        amount: "$50.00"
    },
    {
        id: 7,
        date: "2022-01-15",
        description: "Grocery Store Purchase",
        amount: "$50.00"
    },
    {
        id: 8,
        date: "2022-01-15",
        description: "Grocery Store Purchase",
        amount: "$50.00"
    },
    {
        id: 9,
        date: "2022-01-15",
        description: "Grocery Store Purchase",
        amount: "$50.00"
    },
    {
        id: 10,
        date: "2022-01-15",
        description: "Grocery Store Purchase",
        amount: "$50.00"
    },
]