
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */


/**
 * Custom blocks
 */
//% color="#666666" weight=10 icon="\uf1b9"
namespace motorbit {

    let M1_DIR = DigitalPin.P8
    let M2_DIR = DigitalPin.P12
    let M1_PWM = AnalogPin.P1
    let M2_PWM = AnalogPin.P2

    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 0
     */
    //% block
    export function forward(n: number): void {
        // Add code here
        let speed = 0

        M1_DIR = 1
        M2_DIR = 1

        speed = n * 1023 / 100
        M1_PWM = speed
        M2_PWM = speed

    }

    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 0
     */
    //% block
    export function back(n: number): void {
        // Add code here
        let speed = 0

        M1_DIR = 0
        M2_DIR = 0

        speed = n * 1023 / 100
        M1_PWM = speed
        M2_PWM = speed

    }


    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 0
     */
    //% block
    export function turnleft(n: number): void {
        // Add code here
        let speed = 0

        M1_DIR = 0
        M2_DIR = 1

        speed = n * 1023 / 100
        M1_PWM = 0
        M2_PWM = speed

    }

    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 0
     */
    //% block
    export function turnright(n: number): void {
        // Add code here
        let speed = 0

        M1_DIR = 1
        M2_DIR = 0

        speed = n * 1023 / 100
        M1_PWM = speed
        M2_PWM = 0

    }

    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 0
     */
    //% block
    export function braking (): void {
        // Add code here


        M1_DIR = 0
        M2_DIR = 0

        M1_PWM = 0
        M2_PWM = 0

    }

    /**
    * TODO: describe your function here
    * @param n describe parameter here, eg: 0
    */
    //% block
    export function freestyle(m: number, n: number): void {
        // Add code here

        if( m > 0){
            M1_DIR = 1
        } else M1_DIR = 0

        if (n > 0) {
            M2_DIR = 1
        } else M2_DIR = 0

        M1_PWM = Math.abs(m)
        M2_PWM = Math.abs(n)

    }



}
