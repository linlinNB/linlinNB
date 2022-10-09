<template>
  <div>
    <div>替换Item</div>
    <left-card style="width: 100%;height: 200px"
               :config="config"
               :data-source="featureList"
               main-img-key="previewImage"
               sub-img-key="masterPreviewImage"
    >
      <template #item="{feature,dbCopy}">
        <basic-item :feature="feature"/>
      </template>
    </left-card>
    <div>替换itemLeft</div>
    <left-card style="width: 100%;height: 200px"
               :config="config"
               :data-source="featureList"
               main-img-key="previewImage"
               sub-img-key="masterPreviewImage"
    >
      <template #itemLeft="{feature}">
        <div style="border: 1px black solid;height: 100%;text-align: center">
          {{'替换的图片'}}
        </div>
      </template>
    </left-card>
    <div>替换content</div>
    <left-card style="width: 100%;height: 200px"
               :config="config"
               :data-source="featureList"
               main-img-key="previewImage"
               sub-img-key="masterPreviewImage"
    >
      <template #content="{feature}">
        <div style="border: 1px black solid;height: 100%;text-align: center">
          {{'替换内容'}}
        </div>
      </template>
    </left-card>
    <div>替换单一项 (key+'value')</div>
    <left-card style="width: 100%;height: 200px"
               :config="config"
               :data-source="featureList"
               main-img-key="previewImage"
               sub-img-key="masterPreviewImage"
    >
      <template #startTimeValue="{feature}">
        <div style="border: 1px black solid;height: 100%;text-align: center">
          替换时间{{feature.startTime}}
        </div>
      </template>
    </left-card>
    <div>替换actionLeft&action</div>
    <left-card style="width: 100%;height: 200px"
               :config="config"
               :data-source="featureList"
               main-img-key="previewImage"
               sub-img-key="masterPreviewImage"
               :action="{alignment:true}"
    >
      <template #actionLeft="{feature}">
        <div style="border: 1px black solid;height: 100%;text-align: center">
          替换按钮左
        </div>
      </template>
      <template #action="{feature}">
        <span style="border: 1px black solid;height: 100%;text-align: center">
          替换按钮右
        </span>
      </template>
    </left-card>
  </div>

</template>

<script>
import BasicItem from "./BasicItem";
export default {
  name: "LeftCardSlotDemo",
  components: {BasicItem},
  data() {
    return {
      featureList: [
        {
          "featureId": "4088672140336929587",
          "angle": 287,
          "totalFrame": 42,
          "faceSize": 0,
          "startTime": "2022-10-09 14:27:00",
          "endTime": "2022-10-09 14:27:02",
          "sourceType": 0,
          "isGBHistory": 0,
          "nodeId": "6257a3101d41c8d570ace9ad",
          "gender": 0,
          "regionId": "c4ca4238a0b923820dcc509a6f75849b",
          "latitude": 39.97938861006719,
          "longitude": 116.34552514793583,
          "cascadeId": "cascade_130100",
          "cascadeMonitorFeature": false,
          "previewImage": "http://192.168.110.10:82/gait-boot/v1/file/c4ca4238a0b923820dcc509a6f75849b/20221009-multiple/4088672143168299315_preview/4088672143168299315_preview.png?p=20221009-multiple,5c198d575ce611902f0989b751be463d,632341,638445",
          "masterPreviewImage": "http://192.168.110.10:82/gait-boot/v1/file/master/c4ca4238a0b923820dcc509a6f75849b/6257a3101d41c8d570ace9ad/4088672143168299315_preview/4088672143168299315_preview.png?p=20221009-multiple,5c198d575ce611902f0989b751be463d,632341,638445",
          "videoUrl": "http://192.168.110.10:82/gait-boot/v1/file/unzip/c4ca4238a0b923820dcc509a6f75849b/20221009-multiple/4088672143168299315_images/video.mp4?t=jpg&p=20221009-multiple,5c198d575ce611902f0989b751be463d,0,632340",
          "masterVideoUrl": "http://192.168.110.10:82/gait-boot/v1/file/master/unzip/c4ca4238a0b923820dcc509a6f75849b/6257a3101d41c8d570ace9ad/4088672143168299315_images/video.mp4?t=jpg&p=20221009-multiple,5c198d575ce611902f0989b751be463d,0,632340",
          "facePath": "",
          "sequenceImgUrl": "http://192.168.110.10:82/gait-boot/v1/file/unzip/c4ca4238a0b923820dcc509a6f75849b/20221009-multiple/4088672143168299315_images/all.jpg?t=jpg&p=20221009-multiple,5c198d575ce611902f0989b751be463d,0,632340",
          "masterSequenceImgUrl": "http://192.168.110.10:82/gait-boot/v1/file/master/unzip/c4ca4238a0b923820dcc509a6f75849b/6257a3101d41c8d570ace9ad/4088672143168299315_images/all.jpg?t=jpg&p=20221009-multiple,5c198d575ce611902f0989b751be463d,0,632340",
          "zipUrl": "http://192.168.110.10:82/gait-boot/v1/file/c4ca4238a0b923820dcc509a6f75849b/20221009-multiple/4088672143168299315_images/4088672143168299315_images.zip?t=jpg&p=20221009-multiple,5c198d575ce611902f0989b751be463d,0,632340",
          "masterZipUrl": "http://192.168.110.10:82/gait-boot/v1/file/master/c4ca4238a0b923820dcc509a6f75849b/6257a3101d41c8d570ace9ad/4088672143168299315_images/4088672143168299315_images.zip?t=jpg&p=20221009-multiple,5c198d575ce611902f0989b751be463d,0,632340",
          "sequenceCount": 42,
          "downloadPath": "/gait-boot/v1/file/unzip/c4ca4238a0b923820dcc509a6f75849b/20221009-multiple/4088672143168299315_images/metadata.txt?t=jpg&p=20221009-multiple,5c198d575ce611902f0989b751be463d,0,632340",
          "masterDownloadPath": "http://192.168.110.10:82/gait-boot/v1/file/master/unzip/c4ca4238a0b923820dcc509a6f75849b/6257a3101d41c8d570ace9ad/4088672143168299315_images/metadata.txt?t=jpg&p=20221009-multiple,5c198d575ce611902f0989b751be463d,0,632340",
          "cascadeName": "河北石家庄市公安局",
          "sourceIdentify": 102748571,
          "videoSourceName": "(河北石家庄市公安局)GMZc",
          "createTime": "2022-10-09 14:27:00",
          "sim":0.5,
        },
        {
          "sim":0.5,
          "featureId": "4088672071617452896",
          "angle": 96,
          "totalFrame": 28,
          "faceSize": 0,
          "startTime": "2022-10-09 14:26:58",
          "endTime": "2022-10-09 14:27:01",
          "sourceType": 0,
          "isGBHistory": 0,
          "nodeId": "6257a3101d41c8d570ace9ad",
          "gender": 2,
          "regionId": "c4ca4238a0b923820dcc509a6f75849b",
          "latitude": 39.97938861006719,
          "longitude": 116.34552514793583,
          "cascadeId": "cascade_130100",
          "cascadeMonitorFeature": false,
          "previewImage": "http://192.168.110.10:82/gait-boot/v1/file/c4ca4238a0b923820dcc509a6f75849b/20221009-multiple/4088672074448822624_preview/4088672074448822624_preview.png?p=20221009-multiple,5bf9d13347e6ebf27faaa757696cd47d,429104,434153",
          "masterPreviewImage": "http://192.168.110.10:82/gait-boot/v1/file/master/c4ca4238a0b923820dcc509a6f75849b/6257a3101d41c8d570ace9ad/4088672074448822624_preview/4088672074448822624_preview.png?p=20221009-multiple,5bf9d13347e6ebf27faaa757696cd47d,429104,434153",
          "videoUrl": "http://192.168.110.10:82/gait-boot/v1/file/unzip/c4ca4238a0b923820dcc509a6f75849b/20221009-multiple/4088672074448822624_images/video.mp4?t=jpg&p=20221009-multiple,5bf9d13347e6ebf27faaa757696cd47d,0,429103",
          "masterVideoUrl": "http://192.168.110.10:82/gait-boot/v1/file/master/unzip/c4ca4238a0b923820dcc509a6f75849b/6257a3101d41c8d570ace9ad/4088672074448822624_images/video.mp4?t=jpg&p=20221009-multiple,5bf9d13347e6ebf27faaa757696cd47d,0,429103",
          "facePath": "",
          "sequenceImgUrl": "http://192.168.110.10:82/gait-boot/v1/file/unzip/c4ca4238a0b923820dcc509a6f75849b/20221009-multiple/4088672074448822624_images/all.jpg?t=jpg&p=20221009-multiple,5bf9d13347e6ebf27faaa757696cd47d,0,429103",
          "masterSequenceImgUrl": "http://192.168.110.10:82/gait-boot/v1/file/master/unzip/c4ca4238a0b923820dcc509a6f75849b/6257a3101d41c8d570ace9ad/4088672074448822624_images/all.jpg?t=jpg&p=20221009-multiple,5bf9d13347e6ebf27faaa757696cd47d,0,429103",
          "zipUrl": "http://192.168.110.10:82/gait-boot/v1/file/c4ca4238a0b923820dcc509a6f75849b/20221009-multiple/4088672074448822624_images/4088672074448822624_images.zip?t=jpg&p=20221009-multiple,5bf9d13347e6ebf27faaa757696cd47d,0,429103",
          "masterZipUrl": "http://192.168.110.10:82/gait-boot/v1/file/master/c4ca4238a0b923820dcc509a6f75849b/6257a3101d41c8d570ace9ad/4088672074448822624_images/4088672074448822624_images.zip?t=jpg&p=20221009-multiple,5bf9d13347e6ebf27faaa757696cd47d,0,429103",
          "sequenceCount": 28,
          "downloadPath": "/gait-boot/v1/file/unzip/c4ca4238a0b923820dcc509a6f75849b/20221009-multiple/4088672074448822624_images/metadata.txt?t=jpg&p=20221009-multiple,5bf9d13347e6ebf27faaa757696cd47d,0,429103",
          "masterDownloadPath": "http://192.168.110.10:82/gait-boot/v1/file/master/unzip/c4ca4238a0b923820dcc509a6f75849b/6257a3101d41c8d570ace9ad/4088672074448822624_images/metadata.txt?t=jpg&p=20221009-multiple,5bf9d13347e6ebf27faaa757696cd47d,0,429103",
          "cascadeName": "河北石家庄市公安局",
          "sourceIdentify": 102748571,
          "videoSourceName": "(河北石家庄市公安局)GMZc",
          "createTime": "2022-10-09 14:26:58"
        }
      ],
    }
  },
  computed: {
    config: function () {
      return [
        {
          label: '地点',
          key: 'videoSourceName',
          iconfont: 'iconhome-yujingdidian'
        },
        {
          label: '时间',
          key: 'startTime',
          iconfont: 'iconriqi_16'
        },
        {
          label: '相识度',
          key: 'similarity',
          style: {
            color: '#D42131',
            fontSize: '18px',
            fontFamily: 'Barlow-BoldItalic',
            fontWeight: 'BoldItalic'
          },
          render: (feature) => {
            return isNaN(feature.sim) ? '0' : Number(feature.sim * 100).toFixed(2) + '%'
          },
          isShow: (_, feature) => {
            return feature.sim
          }
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>