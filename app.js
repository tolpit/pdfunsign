/**
 * PDFUnsign.com - Client-Side PDF Unlock & Signature Stripping Engine
 * 100% Private, Zero Server Upload, Full Vector & Font Fidelity
 */

// ============================================================================
// 1. DICTIONARIES (FR / EN)
// ============================================================================
const i18n = {
  fr: {
    metaTitle: "PDFUnsign - Supprimer les Signatures et Déverrouiller un PDF en Ligne",
    metaDesc: "Supprimez gratuitement et en toute sécurité les signatures électroniques, verrous PDF/A et restrictions d'édition de vos PDF. 100% côté client, vos fichiers ne quittent jamais votre appareil.",
    brandTag: "Client-Side • Privé",
    langFr: "FR",
    langEn: "EN",
    privacyBadge: "100% Côté Client • Aucun Fichier Téléversé",
    heroTag: "⚡ DÉVERROUILLAGE PDF INSTANTANÉ & PRIVÉ",
    heroTitle: "Supprimez les Signatures &",
    heroTitleGradient: "Rendez vos PDF Éditables",
    heroSubtitle: "Éliminez instantanément les signatures électroniques (PAdES, CAdES, DocMDP), les verrous de formulaire AcroForm et les restrictions de lecture seule PDF/A. Tout est traité dans votre navigateur.",
    highlight1: "100% Confidentiel (zéro upload)",
    highlight2: "Fidélité vectorielle native",
    highlight3: "Édition et conversion débloquées",
    dropZoneTitle: "Glissez vos fichiers PDF ici",
    dropZoneSubtitle: "ou cliquez pour sélectionner un ou plusieurs fichiers depuis votre appareil",
    btnBrowse: "Sélectionner des PDF",
    dropZoneNote: "🔒 Traitement sécurisé dans votre navigateur. Aucun fichier n'est envoyé sur un serveur.",
    queueTitle: "Fichiers traités",
    btnClearAll: "Tout effacer",
    statusProcessing: "Déverrouillage en cours...",
    statusSuccess: "Déverrouillé & Éditable",
    statusError: "Erreur lors du traitement",
    metricPages: "Pages",
    metricSigs: "Signatures retirées",
    metricAnnots: "Widgets purgés",
    metricPerms: "Verrous d'édition",
    metricSize: "Taille",
    btnDownload: "Télécharger le PDF déverrouillé",
    btnDownloadAll: "Tout télécharger",
    adLabel: "Publicité",

    // SEO / Content
    whyTitle: "Pourquoi utiliser PDFUnsign ?",
    whySubtitle: "La solution la plus rapide et confidentielle pour réactiver l'édition de vos documents.",
    feat1Title: "Respect total de votre vie privée",
    feat1Desc: "Contrairement aux convertisseurs classiques, PDFUnsign traite votre document directement dans votre mémoire vive (RAM) via JavaScript. Vos contrats, relevés et documents légaux ne quittent jamais votre machine.",
    feat2Title: "Zéro perte de qualité (Vectoriel)",
    feat2Desc: "Aucune rastérisation ni conversion en image. Vos textes sélectionnables, polices intégrées, tableaux et graphismes vectoriels originaux sont conservés à 100%.",
    feat3Title: "Compatibilité Universelle",
    feat3Desc: "Compatible avec Adobe Acrobat, Nitro, Foxit, Word, LibreOffice et les services cloud. Les alertes de lecture seule PDF/A et les champs verrouillés disparaissent complètement.",

    // Steps
    stepsTag: "FONCTIONNEMENT",
    stepsTitle: "Comment déverrouiller un PDF signé en 3 étapes",
    step1Title: "1. Déposez votre document",
    step1Desc: "Faites glisser votre fichier PDF verrouillé ou signé dans la zone de dépôt.",
    step2Title: "2. Nettoyage algorithmique",
    step2Desc: "Le moteur JavaScript supprime les dictionnaires /Sig, les drapeaux /SigFlags, réinitialise AcroForm et nettoie les balises XMP.",
    step3Title: "3. Téléchargement immédiat",
    step3Desc: "Récupérez votre PDF prêt à être modifié, annoté, fusionné ou re-signé sans aucune restriction.",

    // Comparison
    compTitle: "PDFUnsign vs Outils Traditionnels",
    compHeaderCrit: "Critères",
    compHeaderOur: "PDFUnsign (Côté Client)",
    compHeaderOther: "Convertisseurs Serveur",
    compRow1: "Confidentialité & RGPD",
    compRow1Our: "100% Garanti (aucun upload)",
    compRow1Other: "Risque (stockage serveur tiers)",
    compRow2: "Qualité vectorielle",
    compRow2Our: "Parfaite (aucune rastérisation)",
    compRow2Other: "Souvent pixelisé / aplati en image",
    compRow3: "Vitesse de traitement",
    compRow3Our: "Instantané (< 1 seconde)",
    compRow3Other: "Dépendant de l'upload/download",
    compRow4: "Limites de taille / Quotas",
    compRow4Our: "Illimité & Gratuit",
    compRow4Other: "Abonnements payants ou bridés",

    // FAQ
    faqTitle: "Foire Aux Questions (FAQ)",
    faqSubtitle: "Tout ce que vous devez savoir sur le déverrouillage de PDF signés.",
    faqQ1: "Est-ce légal de supprimer une signature électronique d'un PDF ?",
    faqA1: "Oui, tant que vous êtes l'auteur ou le propriétaire légitime du document et que vous devez le corriger, le mettre à jour ou le modifier. Le déverrouillage supprime la protection cryptographique pour permettre l'édition, tout comme vous modifieriez un brouillon avant validation finale.",
    faqQ2: "Mes données personnelles ou documents confidentiels sont-ils stockés ?",
    faqA2: "Absolument pas. L'intégralité du traitement s'exécute localement dans votre navigateur web grâce à la technologie WebAssembly et JavaScript moderne. Rien n'est envoyé sur internet ni enregistré sur un quelconque serveur.",
    faqQ3: "Pourquoi Adobe Acrobat m'empêchait-il de modifier mon PDF ?",
    faqA3: "Lorsqu'un document est signé numériquement ou conforme à la norme PDF/A, Acrobat verrouille l'interface avec des balises d'intégrité (/DocMDP, /Perms) et des métadonnées XMP (pdfaid). PDFUnsign purge ces verrous logiciels pour rétablir les capacités complètes d'édition.",
    faqQ4: "Le texte reste-t-il sélectionnable et modifiable ?",
    faqA4: "Oui, à 100%. PDFUnsign ne transforme jamais votre PDF en image. Tous les calques textuels, les polices de caractères incorporées et les éléments vectoriels sont préservés avec une exactitude mathématique.",

    footerDesc: "Outil gratuit de déverrouillage et suppression de signatures électroniques sur PDF. Traitement local et sécurisé dans le navigateur.",
    footerPrivacy: "Politique de confidentialité",
    footerTerms: "Conditions d'utilisation",
    footerContact: "Contact",
    footerCopyright: "© 2026 PDFUnsign.com — Tous droits réservés.",
    cookieText: "Nous utilisons des cookies pour mesurer l'audience (Google Analytics). Vos documents PDF restent strictement confidentiels et ne quittent jamais votre appareil.",
    cookieAccept: "Accepter",
    cookieDecline: "Refuser",
    cookieManage: "Gestion des cookies"
  },

  en: {
    metaTitle: "PDFUnsign - Remove Signatures & Unlock Signed PDF Online",
    metaDesc: "Free and secure client-side tool to remove digital signatures, PDF/A read-only locks, and editing restrictions from PDF files. 100% private: files never leave your device.",
    brandTag: "Client-Side • Private",
    langFr: "FR",
    langEn: "EN",
    privacyBadge: "100% Client-Side • No File Uploads",
    heroTag: "⚡ INSTANT & PRIVATE PDF UNLOCKER",
    heroTitle: "Remove Signatures &",
    heroTitleGradient: "Make Your PDFs Editable",
    heroSubtitle: "Instantly strip digital signatures (PAdES, CAdES, DocMDP), AcroForm locks, and PDF/A read-only restrictions. Everything runs securely right inside your browser.",
    highlight1: "100% Private (zero uploads)",
    highlight2: "Native vector fidelity",
    highlight3: "Editing & conversion unlocked",
    dropZoneTitle: "Drop your PDF files here",
    dropZoneSubtitle: "or click to select one or more files from your device",
    btnBrowse: "Choose PDF Files",
    dropZoneNote: "🔒 Secure browser-only processing. No documents are ever uploaded to a server.",
    queueTitle: "Processed Files",
    btnClearAll: "Clear All",
    statusProcessing: "Unlocking in progress...",
    statusSuccess: "Unlocked & Fully Editable",
    statusError: "Error while processing",
    metricPages: "Pages",
    metricSigs: "Signatures stripped",
    metricAnnots: "Widgets purged",
    metricPerms: "Edit locks",
    metricSize: "Size",
    btnDownload: "Download Unlocked PDF",
    btnDownloadAll: "Download All",
    adLabel: "Advertisement",

    // SEO / Content
    whyTitle: "Why Choose PDFUnsign?",
    whySubtitle: "The fastest, most secure way to regain full edit access to your signed documents.",
    feat1Title: "Total Privacy Guarantee",
    feat1Desc: "Unlike traditional online PDF editors, PDFUnsign processes your document entirely in your browser's memory using JavaScript. Sensitive contracts, bank statements, and legal files never leave your device.",
    feat2Title: "Zero Quality Loss (Vector)",
    feat2Desc: "No rasterization or image flattening. Your selectable text, embedded fonts, tables, and native vector graphics are preserved with 100% accuracy.",
    feat3Title: "Universal Compatibility",
    feat3Desc: "Open and edit your unlocked PDF in Adobe Acrobat, Nitro, Foxit, Microsoft Word, or LibreOffice without read-only warnings or restricted permissions.",

    // Steps
    stepsTag: "HOW IT WORKS",
    stepsTitle: "How to unlock a signed PDF in 3 simple steps",
    step1Title: "1. Select your document",
    step1Desc: "Drag and drop your locked or digitally signed PDF into the upload area.",
    step2Title: "2. Client-side algorithm",
    step2Desc: "Our JavaScript engine removes /Sig dictionaries, /SigFlags, resets AcroForm permissions, and neutralizes PDF/A XMP metadata.",
    step3Title: "3. Instant download",
    step3Desc: "Download your clean PDF immediately, ready to be edited, printed, merged, or signed anew without restrictions.",

    // Comparison
    compTitle: "PDFUnsign vs Traditional Cloud Converters",
    compHeaderCrit: "Criteria",
    compHeaderOur: "PDFUnsign (Client-Side)",
    compHeaderOther: "Server-Based Converters",
    compRow1: "Privacy & GDPR",
    compRow1Our: "100% Guaranteed (No upload)",
    compRow1Other: "High risk (Stored on 3rd-party servers)",
    compRow2: "Vector Quality",
    compRow2Our: "Pristine (No rasterization)",
    compRow2Other: "Often compressed or flattened into images",
    compRow3: "Processing Speed",
    compRow3Our: "Instant (< 1 second)",
    compRow3Other: "Depends on upload & queue speeds",
    compRow4: "Size Limits & Pricing",
    compRow4Our: "Unlimited & Free",
    compRow4Other: "Subscription walls or file size caps",

    // FAQ
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Everything you need to know about unlocking and un-signing PDFs.",
    faqQ1: "Is it legal to remove a digital signature from a PDF?",
    faqA1: "Yes, provided you are the rightful owner or author of the document and need to modify, amend, or update it. Unlocking simply removes cryptographic locks so the document can be edited, just as you would update a draft before re-approving.",
    faqQ2: "Are my documents or personal data stored on your servers?",
    faqA2: "No, never. The entire application executes locally in your web browser using modern JavaScript. Zero bytes are uploaded to the internet or stored on external servers.",
    faqQ3: "Why did Adobe Acrobat prevent me from editing my PDF?",
    faqA3: "When a PDF is signed or saved with PDF/A conformance, readers like Adobe Acrobat lock down the editing toolbars with /DocMDP and /Perms flags, alongside strict XMP metadata. PDFUnsign purges these restrictions so editing works seamlessly.",
    faqQ4: "Does the text remain selectable and searchable?",
    faqA4: "Yes, completely. PDFUnsign never turns your PDF into a scanned picture. All font structures, vector curves, text flows, and bookmarks remain intact.",

    footerDesc: "Free online tool to remove digital signatures and unlock PDF files for editing. 100% private client-side processing.",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service",
    footerContact: "Contact",
    footerCopyright: "© 2026 PDFUnsign.com — All rights reserved.",
    cookieText: "We use cookies to measure website traffic (Google Analytics). Your PDF documents remain strictly confidential and never leave your device.",
    cookieAccept: "Accept",
    cookieDecline: "Decline",
    cookieManage: "Cookie Preferences"
  }
};

// ============================================================================
// 2. STATE & LANGUAGE MANAGER (/ for EN, /fr for FR)
// ============================================================================
let currentLang = 'en';
const processedFiles = [];

function detectLanguage() {
  const pathname = window.location.pathname.toLowerCase();
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');

  if (langParam === 'fr' || langParam === 'en') return langParam;
  if (pathname.includes('/fr/') || pathname.endsWith('/fr') || pathname.endsWith('/fr/index.html')) {
    return 'fr';
  }
  return 'en';
}

function initLanguage() {
  currentLang = detectLanguage();
  applyTranslations(currentLang);
}

function switchLanguage(targetLang) {
  if (targetLang !== 'fr' && targetLang !== 'en') return;
  if (targetLang === currentLang) return;

  localStorage.setItem('pdfunsign_lang', targetLang);

  const isCurrentlyFr = window.location.pathname.includes('/fr');
  if (targetLang === 'fr') {
    if (!isCurrentlyFr) {
      if (window.location.protocol === 'file:') {
        window.location.href = 'fr/index.html';
      } else {
        window.location.href = '/fr/';
      }
      return;
    }
  } else {
    if (isCurrentlyFr) {
      if (window.location.protocol === 'file:') {
        window.location.href = '../index.html';
      } else {
        window.location.href = '/';
      }
      return;
    }
  }

  currentLang = targetLang;
  applyTranslations(targetLang);
}

function applyTranslations(lang) {
  const dict = i18n[lang];
  document.documentElement.lang = lang;
  document.title = dict.metaTitle;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', dict.metaDesc);

  // Update active state on language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Apply to all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Apply to all elements with data-i18n-html
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
}

// ============================================================================
// 3. CORE PDF UNLOCKING ENGINE (PDF-LIB PURE JS)
// ============================================================================

/**
 * Cleans XMP metadata strings of PDF/A conformance and signature entries.
 */
function cleanXmpMetadataString(metaStr) {
  if (!metaStr) return metaStr;
  let res = metaStr;

  // 1. Remove pdfaid description (forces Acrobat read-only PDF/A mode)
  res = res.replace(/<rdf:Description[^>]*xmlns:pdfaid=[^>]*>[\s\S]*?<\/rdf:Description>/gi, '');
  res = res.replace(/<pdfaid:part>[\s\S]*?<\/pdfaid:part>/gi, '');
  res = res.replace(/<pdfaid:conformance>[\s\S]*?<\/pdfaid:conformance>/gi, '');

  // 2. Remove signed history actions
  res = res.replace(/<rdf:li\b[^>]*>(?:(?!<\/rdf:li>)[\s\S])*?signed[\s\S]*?<\/rdf:li>/gi, '');
  res = res.replace(/<stEvt:action>signed<\/stEvt:action>/gi, '');

  return res;
}

/**
 * Strips all digital signatures, AcroForm locks, Perms, DocMDP, and PDF/A restrictions.
 * @param {ArrayBuffer} arrayBuffer - Input raw PDF bytes
 * @returns {Promise<{ cleanBytes: Uint8Array, pageCount: number, deletedWidgets: number, deletedAnnots: number, purgedSigObjects: number }>}
 */
async function unlockPdfBuffer(arrayBuffer) {
  const { PDFDocument, PDFName, PDFDict, PDFArray, PDFStream } = PDFLib;

  // Load document without strict encryption failure
  const pdfDoc = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
  const catalog = pdfDoc.catalog;
  const context = pdfDoc.context;

  let deletedWidgets = 0;
  let deletedAnnots = 0;
  let purgedSigObjects = 0;

  // 1. Clean annotations on all pages (Widgets & signature stamps)
  const pages = pdfDoc.getPages();
  for (const page of pages) {
    const annotsRef = page.node.get(PDFName.of('Annots'));
    if (annotsRef) {
      const annots = context.lookup(annotsRef);
      if (annots instanceof PDFArray) {
        const remaining = [];
        for (let i = 0; i < annots.size(); i++) {
          const annotObj = context.lookup(annots.get(i));
          if (annotObj instanceof PDFDict) {
            const subtype = annotObj.get(PDFName.of('Subtype'))?.toString();
            const ft = annotObj.get(PDFName.of('FT'))?.toString();

            // Form field widget or signature field
            if (subtype === '/Widget' || ft === '/Sig') {
              deletedWidgets++;
              continue;
            }

            // Signature Stamp
            if (subtype === '/Stamp') {
              const subj = (annotObj.get(PDFName.of('Subj'))?.toString() || '').toLowerCase();
              const contents = (annotObj.get(PDFName.of('Contents'))?.toString() || '').toLowerCase();
              if (subj.includes('sign') || contents.includes('sign') || contents.includes('certif') || contents.includes('cades')) {
                deletedAnnots++;
                continue;
              }
            }
          }
          remaining.push(annots.get(i));
        }

        if (remaining.length === 0) {
          page.node.delete(PDFName.of('Annots'));
        } else {
          page.node.set(PDFName.of('Annots'), context.obj(remaining));
        }
      }
    }
  }

  // 2. Clean Catalog dictionaries
  if (catalog.has(PDFName.of('AcroForm'))) catalog.delete(PDFName.of('AcroForm'));
  if (catalog.has(PDFName.of('Perms'))) catalog.delete(PDFName.of('Perms'));
  if (catalog.has(PDFName.of('Legal'))) catalog.delete(PDFName.of('Legal'));
  catalog.set(PDFName.of('PageMode'), PDFName.of('UseNone'));

  // 3. Scan & Purge indirect signature dictionaries
  const sigIndicators = ['/ByteRange', '/SubFilter', '/ETSI.CAdES', '/Adobe.PPKLite', '/DocMDP', '/SigFlags'];
  for (const [ref, obj] of context.enumerateIndirectObjects()) {
    if (obj instanceof PDFDict || obj instanceof PDFStream) {
      const dict = obj instanceof PDFStream ? obj.dict : obj;
      let isSigObj = false;
      for (const key of dict.keys()) {
        if (sigIndicators.includes(key.toString())) {
          isSigObj = true;
          break;
        }
      }
      if (isSigObj) {
        context.delete(ref);
        purgedSigObjects++;
      }
    }
  }

  // 4. Clean XMP Metadata stream
  const metaRef = catalog.get(PDFName.of('Metadata'));
  if (metaRef) {
    const metaObj = context.lookup(metaRef);
    if (metaObj && typeof metaObj.getContents === 'function') {
      try {
        const metaBytes = metaObj.getContents();
        const metaStr = new TextDecoder('utf-8').decode(metaBytes);
        const cleanedStr = cleanXmpMetadataString(metaStr);
        const encoded = new TextEncoder().encode(cleanedStr);

        const newStream = context.stream(encoded, {
          Type: PDFName.of('Metadata'),
          Subtype: PDFName.of('XML'),
        });
        catalog.set(PDFName.of('Metadata'), context.register(newStream));
      } catch (err) {
        console.warn('Metadata cleaning notice:', err);
      }
    }
  }

  // 5. Serialize without object streams to ensure maximum compatibility
  const cleanBytes = await pdfDoc.save({ useObjectStreams: false });

  return {
    cleanBytes,
    pageCount: pages.length,
    deletedWidgets,
    deletedAnnots,
    purgedSigObjects
  };
}

// ============================================================================
// 4. UI HANDLERS & FILE PROCESSOR
// ============================================================================

function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(2) + ' MB';
}

async function handleFiles(files) {
  if (!files || files.length === 0) return;

  const queueSection = document.getElementById('file-queue-section');
  if (queueSection) queueSection.style.display = 'block';

  for (const file of files) {
    if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
      showToast(currentLang === 'fr' ? `Le fichier ${file.name} n'est pas un PDF valide.` : `File ${file.name} is not a valid PDF.`, 'error');
      continue;
    }

    const fileId = 'file_' + Math.random().toString(36).substring(2, 9);
    const itemData = {
      id: fileId,
      name: file.name,
      origSize: file.size,
      cleanSize: 0,
      downloadUrl: null,
      status: 'processing'
    };

    processedFiles.push(itemData);
    renderFileItem(itemData);

    try {
      const buffer = await file.arrayBuffer();
      const result = await unlockPdfBuffer(buffer);

      const baseName = file.name.replace(/\.pdf$/i, '');
      const suffix = currentLang === 'fr' ? '_deverrouille' : '_unlocked';
      const outputFileName = `${baseName}${suffix}.pdf`;

      const cleanBlob = new File([result.cleanBytes], outputFileName, { type: 'application/pdf' });
      itemData.blob = cleanBlob;
      itemData.outputFileName = outputFileName;
      itemData.downloadUrl = URL.createObjectURL(cleanBlob);
      itemData.cleanSize = cleanBlob.size;
      itemData.status = 'success';
      itemData.pageCount = result.pageCount;
      itemData.sigsRemoved = result.deletedWidgets + result.deletedAnnots + result.purgedSigObjects;
      itemData.widgetsPurged = result.deletedWidgets;

      updateFileItemUI(itemData);
      showToast(currentLang === 'fr' ? `✓ ${outputFileName} prêt !` : `✓ ${outputFileName} ready!`, 'success');
    } catch (err) {
      console.error('Error processing file:', err);
      itemData.status = 'error';
      itemData.errorMsg = err.message || 'Unknown processing error';
      updateFileItemUI(itemData);
      showToast(currentLang === 'fr' ? `Erreur sur ${file.name}` : `Error processing ${file.name}`, 'error');
    }
  }
}

/**
 * Robust cross-browser file download trigger ensuring proper filename
 */
function downloadBlobFile(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = filename;
  a.setAttribute('download', filename);
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 1000);
}

function renderFileItem(item) {
  const container = document.getElementById('file-items-list');
  if (!container) return;

  const card = document.createElement('div');
  card.className = 'file-item-card';
  card.id = item.id;

  const dict = i18n[currentLang];

  card.innerHTML = `
    <div class="file-item-header">
      <div class="file-info">
        <div class="file-pdf-icon">PDF</div>
        <div class="file-text-meta">
          <div class="file-name" title="${item.name}">${item.name}</div>
          <div class="file-size-badge">${formatFileSize(item.origSize)}</div>
        </div>
      </div>
      <div id="${item.id}_status" class="file-status-badge status-processing">
        ${dict.statusProcessing}
      </div>
    </div>
    <div id="${item.id}_progress" class="progress-container">
      <div class="progress-bar-fill indeterminate"></div>
    </div>
    <div id="${item.id}_body"></div>
  `;

  container.prepend(card);
}

function updateFileItemUI(item) {
  const card = document.getElementById(item.id);
  if (!card) return;

  const statusBadge = document.getElementById(`${item.id}_status`);
  const progress = document.getElementById(`${item.id}_progress`);
  const body = document.getElementById(`${item.id}_body`);
  const dict = i18n[currentLang];

  if (item.status === 'success') {
    if (statusBadge) {
      statusBadge.className = 'file-status-badge status-success';
      statusBadge.innerHTML = `✓ ${dict.statusSuccess}`;
    }
    if (progress) progress.style.display = 'none';

    const downloadName = item.outputFileName || `${item.name.replace(/\.pdf$/i, '')}_unlocked.pdf`;

    if (body) {
      body.innerHTML = `
        <div class="file-audit-grid">
          <div class="audit-metric">
            <span class="audit-metric-label">${dict.metricPages}</span>
            <span class="audit-metric-value">${item.pageCount || 1}</span>
          </div>
          <div class="audit-metric">
            <span class="audit-metric-label">${dict.metricSigs}</span>
            <span class="audit-metric-value success">✓ ${item.sigsRemoved || 0}</span>
          </div>
          <div class="audit-metric">
            <span class="audit-metric-label">${dict.metricPerms}</span>
            <span class="audit-metric-value success">✓ ${currentLang === 'fr' ? 'Débloqués' : 'Unlocked'}</span>
          </div>
          <div class="audit-metric">
            <span class="audit-metric-label">${dict.metricSize}</span>
            <span class="audit-metric-value">${formatFileSize(item.cleanSize)}</span>
          </div>
        </div>
        <div class="file-actions-row" style="margin-top: 0.85rem; justify-content: space-between; align-items: center;">
          <div style="font-size: 0.78rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.35rem; min-width: 0;">
            <span>📄</span>
            <span style="font-weight: 600; color: var(--text-main); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 280px;" title="${downloadName}">${downloadName}</span>
          </div>
          <a href="${item.downloadUrl}" download="${downloadName}" class="btn-download" id="${item.id}_download_btn" data-filename="${downloadName}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            ${dict.btnDownload}
          </a>
        </div>
      `;

      const dlBtn = body.querySelector(`#${item.id}_download_btn`);
      if (dlBtn && item.blob) {
        dlBtn.addEventListener('click', (e) => {
          e.preventDefault();
          downloadBlobFile(item.blob, downloadName);
        });
      }
    }
  } else if (item.status === 'error') {
    if (statusBadge) {
      statusBadge.className = 'file-status-badge status-error';
      statusBadge.textContent = dict.statusError;
    }
    if (body) {
      body.innerHTML = `<div style="color: var(--danger); font-size: 0.85rem; padding: 0.5rem 0;">${item.errorMsg}</div>`;
    }
  }
}

function clearAllFiles() {
  processedFiles.forEach(f => {
    if (f.downloadUrl) URL.revokeObjectURL(f.downloadUrl);
  });
  processedFiles.length = 0;
  const container = document.getElementById('file-items-list');
  if (container) container.innerHTML = '';
  const queueSection = document.getElementById('file-queue-section');
  if (queueSection) queueSection.style.display = 'none';
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ============================================================================
// 5. INITIALIZATION & EVENT LISTENERS
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchLanguage(btn.dataset.lang);
    });
  });

  // Drop zone events
  const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('file-input');
  const browseBtn = document.getElementById('browse-btn');

  if (browseBtn && fileInput) {
    browseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      fileInput.click();
    });
  }

  if (dropZone && fileInput) {
    dropZone.addEventListener('click', () => fileInput.click());

    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('dragover');
    });

    ['dragleave', 'dragend'].forEach(type => {
      dropZone.addEventListener(type, () => dropZone.classList.remove('dragover'));
    });

    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('dragover');
      if (e.dataTransfer && e.dataTransfer.files) {
        handleFiles(e.dataTransfer.files);
      }
    });

    fileInput.addEventListener('change', () => {
      if (fileInput.files && fileInput.files.length > 0) {
        handleFiles(fileInput.files);
        fileInput.value = ''; // Reset input
      }
    });
  }

  // Clear all button
  const clearBtn = document.getElementById('clear-all-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', clearAllFiles);
  }

  // FAQ Accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others
        document.querySelectorAll('.faq-item').forEach(other => other.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });

  // Safe Google AdSense execution
  try {
    if (window.adsbygoogle) {
      (adsbygoogle = window.adsbygoogle || []).push({});
    }
  } catch (e) {
    console.debug('AdSense initialization notice:', e);
  }

  // GDPR Cookie Consent Initialization
  initCookieConsent();
});

// ============================================================================
// 6. GDPR COOKIE CONSENT & CONDITIONAL GOOGLE ANALYTICS (GA4)
// ============================================================================
const GA_ID = 'G-S2WTTLJTHP';
let gaLoaded = false;

function loadGoogleAnalytics() {
  if (gaLoaded) return;
  gaLoaded = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID, {
    anonymize_ip: true
  });
}

function initCookieConsent() {
  const banner = document.getElementById('cookie-banner');
  const consent = localStorage.getItem('pdfunsign_cookie_consent');

  if (consent === 'accepted') {
    loadGoogleAnalytics();
    if (banner) banner.style.display = 'none';
  } else if (consent === 'declined') {
    if (banner) banner.style.display = 'none';
  } else {
    // Show banner on first visit
    if (banner) banner.style.display = 'flex';
  }

  const acceptBtn = document.getElementById('cookie-accept-btn');
  const declineBtn = document.getElementById('cookie-decline-btn');

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('pdfunsign_cookie_consent', 'accepted');
      if (banner) banner.style.display = 'none';
      loadGoogleAnalytics();
      showToast(currentLang === 'fr' ? 'Préférences enregistrées.' : 'Preferences saved.', 'info');
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      localStorage.setItem('pdfunsign_cookie_consent', 'declined');
      if (banner) banner.style.display = 'none';
      showToast(currentLang === 'fr' ? 'Cookies analytiques refusés.' : 'Analytics cookies declined.', 'info');
    });
  }

  document.querySelectorAll('.open-cookie-banner').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (banner) banner.style.display = 'flex';
    });
  });
}
