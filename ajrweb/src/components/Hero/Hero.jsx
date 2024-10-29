import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}><h1 className={styles.title}>Hi, My name is Anthony</h1>
        <p className={styles.description}>
        I am a licensed independent contractor who specializes in carpentry, plumbing, and drywalling.
        I am capable of fixing, finishing, renovating, constructing, and much more!    
        </p>
        <a className={styles.contactBtn} href="mailto:mahamednor780@gmail.com">Contact Me</a>
            </div>
    </section>

}