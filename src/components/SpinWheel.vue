<template>
  <div style="background-color:#71C19C;">
    <!-- type: image -->


    <!-- type: canvas -->
    <FortuneWheel
      style="width: 500px"
      :canvas="canvasOptions"
      :prizes="prizes"
      
      @rotateStart="onCanvasRotateStart"
      @rotateEnd="onRotateEnd"
      
    />
    
  </div>
</template>
<script>



import FortuneWheel from 'vue-fortune-wheel'
import 'vue-fortune-wheel/lib/vue-fortune-wheel.css'

export default {
  components: {
    FortuneWheel
  },
  data() {
    return {
      cavansVerify: true, // Whether the turntable in canvas mode is enabled for verification
      canvasOptions: {
        borderWidth: 12,
        borderColor: '#584b43'
      },
      prizes: [
        {
          id: 1, //* The unique id of each prize, an integer greater than 0
          name: 'Categoria 1', // Prize name, display value when type is canvas (this parameter is not needed when type is image)
          value: 'Categoria 1\'s value', //* Prize value, return value after spinning
          bgColor: '#45ace9', // Background color (no need for this parameter when type is image)
          color: '#ffffff', // Font color (this parameter is not required when type is image)
          probability: 25, //* Probability, up to 4 decimal places (the sum of the probabilities of all prizes
          weight: 1 // Weight, if useWeight is true, the probability is calculated by weight (weight must be an integer), so probability is invalid
        },
        {
          id: 2,
          name: 'Categoria 2',
          value: 'Categoria 2\'s value',
          bgColor: '#dd3832',
          color: '#ffffff',
          probability: 25,
          weight: 1
        },
        {
          id: 3,
          name: 'Categoria 3',
          value: 'Categoria 3\'s value',
          bgColor: '#fef151',
          color: '#ffffff',
          probability: 25,
          weight: 1
        },        {
          id: 4,
          name: 'Categoria 4',
          value: 'Categoria 4\'s value',
          bgColor: '#F75C1E',
          color: '#ffffff',
          probability: 25,
          weight: 1
        }
      ]
    }
  },
  methods: {
    onImageRotateStart() {
      console.log('onRotateStart')
    },
    onCanvasRotateStart(rotate) {
      if (this.canvasVerify) {
        const verified = true // true: the test passed the verification, false: the test failed the verification
        this.DoServiceVerify(verified, 2000).then((verifiedRes) => {
          if (verifiedRes) {
            console.log('Verification passed, start to rotate')
            rotate() // Call the callback, start spinning
            this.canvasVerify = false // Turn off verification mode
          } else {
            alert('Failed verification')
          }
        })
        return
      }
      console.log('onCanvasRotateStart')
    },
    onRotateEnd(prize) {
      alert(prize.value)
    },
    // Simulate the request back-end interface, verified: whether to pass the verification, duration: delay time
    DoServiceVerify(verified, duration) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(verified)
        }, duration)
      })
    }
  }
}


</script>
<style>

</style>




