
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */





/**
 * Custom blocks
 */
//% color="#333333" weight=10 icon="\uf1b9"
namespace motorbit {

    let M1_DIR = 0
    let M2_DIR = 0
    let M1_PWM = 1023
    let M2_PWM = 1023

    function stateupdate(): void {
        pins.digitalWritePin(DigitalPin.P8, M1_DIR)
        pins.digitalWritePin(DigitalPin.P12, M1_DIR)
        pins.analogWritePin(AnalogPin.P1, M1_PWM)
        pins.analogWritePin(AnalogPin.P2, M2_PWM)
    }

    /**
     * TODO: describe your function here
     * @param n the n from 0 (min) to 100 (max), eg:0
     */
    //% blockId=motorbit_forward block="Move forward with speed %n"
    //% n.min=0 n.max=100
    export function forward(n: number): void {
        // Add code here
        let speed = 0

        M1_DIR = 0
        M2_DIR = 0

        speed = n * 1023 / 100
        M1_PWM = speed
        M2_PWM = speed

        stateupdate()

    }

    /**
     * TODO: describe your function here
     * @param n the n from 0 (min) to 100 (max), eg:0
     */
    //% blockId=motorbit_back block="Move back with speed %n"
    //% n.min=0 n.max=100
    export function back(n: number): void {
        // Add code here
        let speed = 0

        M1_DIR = 1
        M2_DIR = 1

        speed = n * 1023 / 100
        M1_PWM = speed
        M2_PWM = speed

        stateupdate()

    }


    /**
     * TODO: describe your function here
     * @param n the n from 0 (min) to 100 (max), eg:50
     */
    //% blockId=motorbit_turnleft block="turn left with speed %n"
    //% n.min=0 n.max=100
    export function turnleft(n: number): void {
        // Add code here
        let speed = 0

        M1_DIR = 0
        M2_DIR = 0

        speed = n * 1023 / 100
        M1_PWM = 0
        M2_PWM = speed

        stateupdate()

    }

    /**
     * TODO: describe your function here
     * @param n the n from 0 (min) to 100 (max), eg:50
     */
    //% blockId=motorbit_turnright block="turn right with speed %n"
    //% n.min=0 n.max=100
    export function turnright(n: number): void {
        // Add code here
        let speed = 0

        M1_DIR = 0
        M2_DIR = 0

        speed = n * 1023 / 100
        M1_PWM = speed
        M2_PWM = 0

        stateupdate()

    }

    /**
     * TODO: describe your function here
     * 
     */
    //% blockId=motorbit_braking block="braking"
    export function braking(): void {
        // Add code here


        M1_DIR = 0
        M2_DIR = 0

        M1_PWM = 0
        M2_PWM = 0

        stateupdate()

    }

    /**
    * TODO: describe your function here
    * @param m the m from -100 (min) to 100 (max), eg:0
    * @param n the n from -100 (min) to 100 (max), eg:0
    */
    //% blockId=motorbit_freestyle block="left wheel speed %m| right wheel speed %n"
    //% m.min=-100 m.max=100
    //% n.min=-100 n.max=100
    export function freestyle(m: number, n: number): void {
        // Add code here


        if (m > 0) {
            M1_DIR = 0
            M1_PWM = m * 1023 / 100
        } 
        else {
            M1_DIR = 1
            M1_PWM = -m * 1023 / 100           
        }

        if (n > 0) {
            M2_DIR = 0
            M2_PWM = n * 1023 / 100
        } else 
        {
            M2_DIR = 1
            M2_PWM = -n * 1023 / 100
        }

        stateupdate()
    }



}
