import React, { useState } from "react";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import { View, StyleSheet, Image, Button } from "react-native";
import * as tf from "@tensorflow/tfjs";
import { PoseNet } from "@tensorflow-models/posenet";
import * as posedetection from '@tensorflow-models/pose-detection';
import {
    bundleResourceIO,
    cameraWithTensors,
  } from '@tensorflow/tfjs-react-native';

/** Este componente se encarga de mostrar lo que ve la camara al usuario, con el zoom minimo */
const CameraComponent = () => {
    const devices = Camera.getAvailableCameraDevices()
    const device = devices.find((d) => d.position === 'front')
    return (
        <View style={styles.container}>
            <Camera
                style={styles.camera}
                device={device}
                isActive={true}
                zoom={device?.minZoom}
            />
            <View style={styles.pose}>
                {pose && (
                <Points
                    points={pose.keypoints}
                    size={20}
                />
                )}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    width: 200,
    height: 200,
  },
  image: {
    width: 200,
    height: 200,
  },
  pose: {
    width: 200,
    height: 200,
  },
});

export default CameraComponent;
