import Img from '../images/Img.jsx';

/* SPREAD 0 DRAMATIC OPENING COVER */
export default function Spread001Cover() {
  return (
    <section className="spread book-cover" data-screen-label="00 Cover">
      {/* BACK COVER (left page) */}
      <div className="page left">
        <div className="bkc-back">
          <div className="bkc-back-photo">
            <Img slot="s0" src="/photos/p16-1.jpg" alt="A lone tiger sitting in the open grassland of Chitwan" />
          </div>
          <div className="bkc-back-body">
            <p className="bkc-hook">Nepal protected the tiger, the rhino, the<br />elephant and they came back,<br />bringing <em>new questions</em> with them.</p>
            <p className="bkc-desc">What happens after conservation succeeds? This is the quieter, harder question that
              follows a generation of protection. In the lowland Terai, in the sal forests and river
              floodplains of Chitwan and Bardia, a fragile coexistence is being negotiated one season at
              a time between wild animals that have no borders and people who do.</p>
            {/* Pull quote */}
            <div style={{ marginTop: "60px", borderLeft: "3px solid var(--amber)", paddingLeft: "40px" }}> <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "30px", lineHeight: "1.6", color: "rgba(255,255,255,.55)", margin: "0 0 20px" }}> “The hardest part of conservation is not saving the animal. It is learning to live beside
              it once it returns.” </p> <span style={{ fontFamily: "var(--sans)", fontSize: "14px", letterSpacing: ".32em", textTransform: "uppercase", color: "var(--amber)" }}>Binayak Basnyat</span> </div>
            {/* Reviewer praise */}
            <div style={{ marginTop: "64px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
              <div> <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "22px", lineHeight: "1.65", color: "rgba(255,255,255,.48)", margin: "0 0 14px" }}> “A small country shaping a big idea for the future of conservation patient, honest, and
                rooted in lived observation.” </p> <span style={{ fontFamily: "var(--sans)", fontSize: "13px", letterSpacing: ".28em", textTransform: "uppercase", color: "rgba(255,255,255,.28)" }}>Conservation Review</span> </div>
              <div> <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "22px", lineHeight: "1.65", color: "rgba(255,255,255,.48)", margin: "0 0 14px" }}> “Rare in its restraint. Basnyat does not argue he observes, and in doing so lets the
                landscape speak for itself.” </p> <span style={{ fontFamily: "var(--sans)", fontSize: "13px", letterSpacing: ".28em", textTransform: "uppercase", color: "rgba(255,255,255,.28)" }}>Wildlife Asia</span> </div>
            </div>
            {/* About the author */}
            <div style={{ marginTop: "60px", paddingTop: "40px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ fontFamily: "var(--sans)", fontSize: "13px", letterSpacing: ".38em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "18px" }}>About the Author</div>
              <p style={{ fontFamily: "var(--body)", fontSize: "21px", lineHeight: "1.75", color: "rgba(255,255,255,.42)", margin: "0" }}> Binayak Basnyat is a Kathmandu-based writer and photographer who has spent over a decade
                documenting wildlife and conservation policy across the Terai lowlands and the Himalayan
                foothills of Nepal. His work has appeared in national and international conservation
                journals and wildlife publications. </p>
            </div>
          </div>
          <div className="bkc-back-foot">
            <div className="bkc-logo">B·B</div>
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px 32px", marginBottom: "22px" }}>
                <div>
                  <div style={{ fontFamily: "var(--sans)", fontSize: "11px", letterSpacing: ".38em", textTransform: "uppercase", color: "rgba(255,255,255,.28)", marginBottom: "6px" }}>Published by</div>
                  <div style={{ fontFamily: "var(--sans)", fontSize: "15px", color: "rgba(255,255,255,.65)", lineHeight: "1.5" }}>Nepal Nature Press<br /><span style={{ fontSize: "13px", color: "rgba(255,255,255,.3)" }}>Kathmandu, Nepal</span></div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--sans)", fontSize: "11px", letterSpacing: ".38em", textTransform: "uppercase", color: "rgba(255,255,255,.28)", marginBottom: "6px" }}>Written by</div>
                  <div style={{ fontFamily: "var(--sans)", fontSize: "15px", color: "rgba(255,255,255,.65)" }}>Binayak Basnyat</div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--sans)", fontSize: "11px", letterSpacing: ".38em", textTransform: "uppercase", color: "rgba(255,255,255,.28)", marginBottom: "6px" }}>Photography</div>
                  <div style={{ fontFamily: "var(--sans)", fontSize: "15px", color: "rgba(255,255,255,.65)" }}>Binayak Basnyat</div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--sans)", fontSize: "11px", letterSpacing: ".38em", textTransform: "uppercase", color: "rgba(255,255,255,.28)", marginBottom: "6px" }}>Design</div>
                  <div style={{ fontFamily: "var(--sans)", fontSize: "15px", color: "rgba(255,255,255,.65)" }}>Vibhuti RL Rana</div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--sans)", fontSize: "11px", letterSpacing: ".38em", textTransform: "uppercase", color: "rgba(255,255,255,.28)", marginBottom: "6px" }}>Typeset in</div>
                  <div style={{ fontFamily: "var(--sans)", fontSize: "15px", color: "rgba(255,255,255,.65)", lineHeight: "1.5" }}>Cormorant Garamond<br />&amp; Lora</div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--sans)", fontSize: "11px", letterSpacing: ".38em", textTransform: "uppercase", color: "rgba(255,255,255,.28)", marginBottom: "6px" }}>Edition</div>
                  <div style={{ fontFamily: "var(--sans)", fontSize: "15px", color: "rgba(255,255,255,.65)" }}>First Edition  ·  MMXXVI</div>
                </div>
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "16px" }}>
                <p style={{ fontFamily: "var(--body)", fontSize: "13px", lineHeight: "1.7", color: "rgba(255,255,255,.22)", margin: "0" }}> © 2026 Binayak Basnyat. All rights reserved. No part of this publication may be reproduced
                  without written permission. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FRONT COVER (right page) magazine style */}
      <div className="page right">
        {/* Full-bleed photo */}
        <div className="bkc-photo">
          <Img slot="s1" src="/photos/p20-1.jpg" alt="A wild tiger at the edge of the Terai grassland at dusk" />
        </div>
        {/* Masthead: large title at top */}
        <div className="bkc-masthead">
          <h1>Addressing<br />Nepal's Wildlife</h1>
          <div className="bkc-sub">Dilemma</div>
          <div className="bkc-byauthor">Binayak Basnyat</div>
        </div>
        {/* Right side floating tag sits in the clear photo zone */}
        <div className="bkc-side-tag"> <span className="bkc-tag-chip">Conservation</span> <div className="bkc-tag-text">Stories from<br />the Terai<br />Plains of Nepal</div> </div>
        {/* Bottom feature headline */}
        <div className="bkc-feature-line">
          <div className="bkf-big"> <span className="bkf-bold">The Wild Heart</span> <span className="bkf-italic">of the Terai</span> </div>
        </div>
        {/* Bottom strip */}
        <div className="bkc-bottom-strip">
          <div className="bkc-strip-left"> <span className="bkc-strip-plus">+</span> <span className="bkc-strip-cats">Tigers · Rhinos · Elephants · Birds</span> </div>
        </div>
      </div>
    </section>
  );
}
