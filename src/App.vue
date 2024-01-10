<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12">
        <h2>Lucky Draw - Showroom Event Honda</h2>
        <div>
          <h1 class="text-4xl bg-emerald-800 font-bold rounded-xl p-10">
            {{ day }} , {{ currenDay }} / {{ month }} / {{ year }}
          </h1>
        </div>

        <div class="container" v-if="!showDraw">
          <form>
            <label for="fname">Nama</label>
            <input
              v-model="nama"
              required
              type="text"
              id="nama"
              name="nama"
              placeholder="Input Nama"
            />

            <label for="lname">Nomor SPK</label>
            <input
              v-model="spk"
              required
              type="text"
              id="spk"
              name="spk"
              placeholder="No. SPK"
            />

            <!-- <label for="cabang">Cabang</label>
            <select v-model="cabang" name="cabang">
              <option value="HSB">HSB</option>
              <option value="BPM">BPM</option>
              <option value="HPK">HPK</option>
              <option value="HBM">HBM</option>
              <option value="HSM">HSM</option>
              <option value="HLP">HLP</option>
              <option value="HBT">HBT</option>
            </select> -->

            <input type="submit" value="Submit" @click="submitForm" />
          </form>
        </div>
        <div v-if="showDraw">
          <FortuneWheel
            style="width: 400px; max-width: 100%"
            :verify="canvasVerify"
            :canvas="canvasOptions"
            :prizes="prizesCanvas"
            @rotateStart="onCanvasRotateStart"
            @rotateEnd="onRotateEnd"
          />
        </div>

        <div>
          <h1 class="text-4xl bg-emerald-800 font-bold rounded-xl p-10">
            Jam : {{ hour }} : {{ minute }} : {{ second }}
          </h1>
        </div>

        <!-- <div>
          <input type="checkbox" v-model="canvasVerify" /> Lucky Draw
          {{ verifyDuration }}s
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import FortuneWheel from './components/fortuneWheel/index.vue'
import { PrizeConfig } from './components/fortuneWheel/types'
import Swal from 'sweetalert2'

const nama = ref(null)
const spk = ref(null)
const cabang = ref(null)
const date = ref(new Date(Date.now()))
const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
const months = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
]
const day = ref(days[date.value.getDay()])
const hour = ref(date.value.getHours())
const minute = ref(date.value.getMinutes())
const second = ref(date.value.getSeconds())
const month = months[date.value.getMonth()]
const currenDay = date.value.getDate()
const year = date.value.getFullYear()

const updateDate = () => {
  date.value = new Date(Date.now())
  hour.value = date.value.getHours()
  minute.value = date.value.getMinutes()
  second.value = date.value.getSeconds()
}
const intervalId = ref(null)

onMounted(() => {
  intervalId.value = setInterval(updateDate, 1000)
})
onBeforeUnmount(() => {
  clearInterval(intervalId.value)
})
// const prizeId = ref(0)

const canvasVerify = ref(false)
const showDraw = ref(false)

const verifyDuration = 2
const canvasOptions = {
  btnWidth: 100,
  borderColor: '#584b43',
  borderWidth: 6,
  lineHeight: 30,
}

const prizesCanvas: PrizeConfig[] = [
  {
    id: 1,
    name: '1 Juta', // 奖品名
    value: '1.000.000', // 奖品值
    bgColor: '#45ace9', // 背景色
    color: '#ffffff', // 字体色
    probability: 30, // 概率，最多保留 4 位小数
  },
  {
    id: 2,
    name: '1,5 Juta',
    value: '1.500.000',
    bgColor: '#dd3832',
    color: '#ffffff',
    probability: 5,
  },
  {
    id: 3,
    name: '2 Juta',
    value: '2.000.000',
    bgColor: '#fef151',
    color: '#ffffff',
    probability: 5,
  },
  {
    id: 4,
    name: '500 Rb',
    value: '500.000',
    bgColor: '#69717d',
    color: '#ffffff',
    probability: 60,
  },
]

function testRequest(verified: boolean, duration: number) {
  // 参数 1: 是否通过验证, 2: 延迟时间
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(verified)
    }, duration)
  })
}

function submitForm() {
  if (nama.value != null && spk.value != null) {
    showDraw.value = true
    localStorage.setItem('nama', nama.value)
    localStorage.setItem('spk', spk.value)
  }

  return
}

function onCanvasRotateStart(rotate: Function) {
  if (canvasVerify.value) {
    const verified = true // true: 测试通过验证, false: 测试未通过验证
    testRequest(verified, verifyDuration * 1000).then((verifiedRes) => {
      if (verifiedRes) {
        console.log('验证通过, 开始旋转')
        rotate() // 调用回调, 开始旋转
        canvasVerify.value = false // 关闭验证模式
      } else {
        alert('未通过验证')
      }
    })
    return
  }
  console.log('onCanvasRotateStart')
}

function onRotateEnd(prize: PrizeConfig) {
  // alert(prize.value)
  Swal.fire({
    title:
      'Selamat, Yth Bapak/Ibu ' +
      localStorage.getItem('nama') +
      ' Nomor Pemesanan ' +
      localStorage.getItem('spk') +
      ' Mendapatkan Rp. ' +
      prize.value,
    icon: 'success',
    confirmButtonText: 'Tutup',
  })
  // localStorage.removeItem('nama')
  // localStorage.removeItem('spk')
}
</script>

<style lang="scss" scoped>
@import './styles/bootstrap-grid.min.css';
@import './style.scss';
</style>
