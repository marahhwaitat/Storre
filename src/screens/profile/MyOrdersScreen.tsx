import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { sharedPaddingHorizontal } from "../../style/sharedStyles";
import OrderItem from "../../components/cart/OrderItem";
import AppSafeView from "../../components/views/AppSaveView";

const MyOrdersScreen = () => {
  // Dummy data for rendering the component
  const orderData = [
    {
      id: 1,
      date: "2025-01-01",
      totalAmount: 120.5,
      totalPrice: "$150",
    },
    {
      id: 2,
      date: "2025-01-02",
      totalAmount: 75.0,
      totalPrice: "$90",
    },
    {
      id: 3,
      date: "2025-01-03",
      totalAmount: 200.25,
      totalPrice: "$250",
    },
  ];

  return (
    <AppSafeView>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: sharedPaddingHorizontal }}
        data={orderData}
        keyExtractor={(item, index) => item?.id.toString()}
        renderItem={({ item }) => (
          <OrderItem
            date={item.date}
            totalAmount={item.totalAmount}
            totalPrice={item.totalPrice}
            style={{ marginBottom: 10 }}
          />
        )}
      />
    </AppSafeView>
  );
};

export default MyOrdersScreen;

const styles = StyleSheet.create({});
