"use client";

// Dynamic Client-side Invitation Card Canvas Generator
export async function generateInvitationCardCanvas(): Promise<HTMLCanvasElement> {
  const canvas = document.createElement("canvas");
  // Set dimensions (high-res ratio)
  canvas.width = 900;
  canvas.height = 1350;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;

  // 1. Soft luxurious cream gradient background
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "#FFFDF9");
  gradient.addColorStop(0.5, "#FAF6ED");
  gradient.addColorStop(1, "#F4EDE0");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 2. Elegant double gold border lines
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#9C7A2E"; // Deep Gold
  ctx.strokeRect(25, 25, canvas.width - 50, canvas.height - 50);

  ctx.lineWidth = 1;
  ctx.strokeStyle = "#C8A24C"; // Gold
  ctx.setLineDash([8, 6]);
  ctx.strokeRect(38, 38, canvas.width - 76, canvas.height - 76);
  ctx.setLineDash([]); // Reset dashed lines

  // 3. Gold corner brackets
  const drawCornerBrackets = (x: number, y: number, xDir: number, yDir: number) => {
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "#9C7A2E";
    ctx.beginPath();
    ctx.moveTo(x, y + yDir * 40);
    ctx.lineTo(x, y);
    ctx.lineTo(x + xDir * 40, y);
    ctx.stroke();
  };
  drawCornerBrackets(50, 50, 1, 1);
  drawCornerBrackets(canvas.width - 50, 50, -1, 1);
  drawCornerBrackets(50, canvas.height - 50, 1, -1);
  drawCornerBrackets(canvas.width - 50, canvas.height - 50, -1, -1);

  // 4. Central decorative gold mandala/icon
  ctx.fillStyle = "#9C7A2E";
  ctx.font = "55px Georgia, serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("❁", canvas.width / 2, 100);

  // 5. Header: OM NAMO NARAYANAYA
  ctx.fillStyle = "#9C7A2E";
  ctx.font = "bold 13px Georgia, serif";
  ctx.fillText("OM NAMO NARAYANAYA", canvas.width / 2, 155);

  // 6. Header: Wedding Invitation
  ctx.fillStyle = "#7A1F2A"; // Rich Maroon
  ctx.font = "bold 36px Georgia, serif";
  ctx.fillText("WEDDING INVITATION", canvas.width / 2, 230);

  // 7. Warm invite text
  ctx.fillStyle = "#2E1B12"; // Deep Charcoal-Brown
  ctx.font = "italic 20px Georgia, serif";
  ctx.fillText("We lovingly invite you to celebrate the marriage of", canvas.width / 2, 300);

  // 8. Groom Details
  ctx.fillStyle = "#2E1B12";
  ctx.font = "bold 28px Georgia, serif";
  ctx.fillText("Er. E. MUTHUKUMAR (Naveen) B.E., M.B.A.", canvas.width / 2, 380);
  ctx.fillStyle = "#9C7A2E";
  ctx.font = "17px Arial, sans-serif";
  ctx.fillText("Infosys Limited", canvas.width / 2, 415);

  // Ampersand
  ctx.fillStyle = "#7A1F2A";
  ctx.font = "italic 38px Georgia, serif";
  ctx.fillText("&", canvas.width / 2, 475);

  // 9. Bride Details
  ctx.fillStyle = "#2E1B12";
  ctx.font = "bold 28px Georgia, serif";
  ctx.fillText("Er. A. AMITHA B.E.", canvas.width / 2, 540);

  // Parent line
  ctx.fillStyle = "#2E1B12";
  ctx.font = "italic 16px Georgia, serif";
  ctx.fillText("Son of N. Elangovan & E. Selvamani", canvas.width / 2, 605);
  ctx.fillText("Daughter of K. Anbalagan & M. Maheswari", canvas.width / 2, 640);

  // Elegant divider line
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(156, 122, 70, 0.25)";
  ctx.beginPath();
  ctx.moveTo(200, 680);
  ctx.lineTo(canvas.width - 200, 680);
  ctx.stroke();

  // 10. Engagement Ceremony details
  ctx.fillStyle = "#9C7A2E";
  ctx.font = "bold 16px Georgia, serif";
  ctx.fillText("ENGAGEMENT CEREMONY", canvas.width / 2, 725);
  
  ctx.fillStyle = "#2E1B12";
  ctx.font = "bold 18px Georgia, serif";
  ctx.fillText("Sunday, August 30, 2026", canvas.width / 2, 765);
  ctx.font = "16px Georgia, serif";
  ctx.fillText("Evening 06:30 PM Onwards", canvas.width / 2, 795);

  // 11. Wedding Muhurtham & Reception details
  ctx.fillStyle = "#9C7A2E";
  ctx.font = "bold 16px Georgia, serif";
  ctx.fillText("WEDDING MUHURTHAM & RECEPTION", canvas.width / 2, 865);
  
  ctx.fillStyle = "#2E1B12";
  ctx.font = "bold 18px Georgia, serif";
  ctx.fillText("Monday, August 31, 2026", canvas.width / 2, 905);
  ctx.font = "16px Georgia, serif";
  ctx.fillText("Muhurtham: Morning 07:00 AM - 09:00 AM", canvas.width / 2, 935);

  // 12. Venue details
  ctx.fillStyle = "#7A1F2A";
  ctx.font = "bold 18px Georgia, serif";
  ctx.fillText("VENUE", canvas.width / 2, 1005);
  
  ctx.fillStyle = "#2E1B12";
  ctx.font = "bold 20px Georgia, serif";
  ctx.fillText("VKT Mahal, Thanthoni, Karur", canvas.width / 2, 1045);

  // Floral Motif bottom
  ctx.fillStyle = "#9C7A2E";
  ctx.font = "40px Georgia, serif";
  ctx.fillText("❁", canvas.width / 2, 1115);

  ctx.fillStyle = "#2E1B12";
  ctx.font = "italic 18px Georgia, serif";
  ctx.fillText("With warm regards, family and friends.", canvas.width / 2, 1165);

  ctx.font = "14px Georgia, serif";
  ctx.fillStyle = "#7A1F2A";
  ctx.fillText("Please accept this as our personal invitation.", canvas.width / 2, 1205);

  return canvas;
}

// Downloads the invitation card image directly to user's device
export async function downloadInvitationCard() {
  try {
    const canvas = await generateInvitationCardCanvas();
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "muthukumar-amitha-wedding-invitation.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Failed to download invitation card:", error);
  }
}

// Shares the invitation card image file natively (on mobile) or falls back to download
export async function shareInvitationCard() {
  try {
    const canvas = await generateInvitationCardCanvas();
    canvas.toBlob(async (blob) => {
      if (!blob) {
        // Fallback to direct download
        downloadInvitationCard();
        return;
      }
      
      const file = new File([blob], "muthukumar-amitha-wedding-invitation.png", { type: "image/png" });
      
      // Check if Web Share API and file sharing is supported by client browser
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: "Muthukumar & Amitha Wedding Invitation",
            text: "Loving invitation to Muthukumar & Amitha's Wedding. Please see the invitation card attached.",
          });
        } catch (shareError: any) {
          // If user cancels the share, just log it. Don't throw errors.
          if (shareError.name !== "AbortError") {
            console.error("Web Share failed:", shareError);
            downloadInvitationCard();
            alert("Invitation card downloaded! You can now share it manually on WhatsApp.");
          }
        }
      } else {
        // Desktop or unsupported browser fallback
        downloadInvitationCard();
        alert("Invitation card downloaded to your device! You can now share it directly on WhatsApp.");
      }
    }, "image/png");
  } catch (error) {
    console.error("Failed to share invitation card:", error);
    downloadInvitationCard();
  }
}
