/*
  IMPORTANT: Hotspot coordinates are best-effort percentage estimates derived from a text-only
  dashboard layout description (not pixel-perfect measurements).

  Repo owner must fine-tune each hotspot manually against final screenshots:
  1) Open pre-visit.html or post-visit.html in a browser.
  2) Use dev tools to inspect `.hotspot-btn[data-id="..."]` overlays.
  3) Adjust top/left/width/height (%) in HOTSPOTS below.
  4) Refresh and iterate until each overlay exactly matches the real target control.
*/
const SHARED_TOP_NAV = [
  {
    id: 'calendar',
    title: 'Calendar',
    description:
      'Shows the day that you are viewing - Arrow back or forward a day at a time - select calendar icon to open a calendar and select a date to view.',
    top: 2.7,
    left: 16.5,
    width: 12,
    height: 5.3,
  },
  {
    id: 'today',
    title: 'Today',
    description: 'Select to go to the current date.',
    top: 2.8,
    left: 29.3,
    width: 5.2,
    height: 5.2,
  },
  {
    id: 'refresh-button',
    title: 'Refresh Button',
    description: 'Select to refresh and update the current page.',
    top: 2.8,
    left: 35.2,
    width: 3.5,
    height: 5.2,
  },
  {
    id: 'day-week',
    title: 'Day | Week',
    description: 'Select Dashboard view: Day View or Week View.',
    top: 2.8,
    left: 39.2,
    width: 8.5,
    height: 5.2,
  },
  {
    id: 'search-bar',
    title: 'Search Bar',
    description: 'Search patients by name.',
    top: 2.8,
    left: 48.6,
    width: 14.8,
    height: 5.2,
  },
  {
    id: 'note-status-view',
    title: 'Note Status View',
    description: 'Toggle on or off to view the total count of unsigned notes.',
    top: 16.9,
    left: 46.4,
    width: 7.7,
    height: 3.9,
  },
];

const HOTSPOTS = {
  'pre-visit': [
    ...SHARED_TOP_NAV,
    {
      id: 'action-required-toggle',
      title: 'Action Required Toggle',
      description: 'Select the arrow and the row will expand and show unsigned notes status for that day.',
      top: 22.4,
      left: 1.1,
      width: 42,
      height: 4.1,
    },
    {
      id: 'cost-share-toggle',
      title: 'Cost Share Toggle',
      description: 'Select the arrow and the row will expand and show status of patient payments for that day.',
      top: 27.1,
      left: 1.1,
      width: 30.5,
      height: 3.9,
    },
    {
      id: 'intake-status',
      title: 'Intake Status',
      description: 'Select to view appointment rows based on their status.',
      top: 31.7,
      left: 23.8,
      width: 24,
      height: 4.2,
    },
    {
      id: 'appointment-row-toggle-pre',
      title: 'Appointment Row Toggle',
      description:
        'Select to expand the appointment row to display: Tebra status, Cost Share category (copay, coinsurance, deductible, cash pay), Pre-encounter Checklist for that specific appointment.',
      top: 44,
      left: 0.6,
      width: 2.6,
      height: 6.3,
    },
    {
      id: 'patient-information',
      title: 'Patient Information',
      description:
        'Select the patient name to open the Patient Info window which displays: Screener results, Pre-encounter Checklist (Intake Paperwork, Insurance Verified, Autopay on File, Credit Card on Tebra), and Messaging Window.',
      top: 45,
      left: 9.8,
      width: 19.5,
      height: 4.3,
    },
    {
      id: 'messaging-pre',
      title: 'Messaging',
      description:
        'Select the messaging icon to communicate with staff. A selector allows you to message: All, Assistants, or Billing.',
      top: 44.5,
      left: 83.8,
      width: 2.7,
      height: 4.6,
    },
    {
      id: 'unsigned-notes',
      title: 'Unsigned Notes',
      description: 'Select to see an expanded window displaying unsigned notes appointment dates.',
      top: 48.4,
      left: 92.2,
      width: 6.8,
      height: 4,
    },
    {
      id: 'appointment-flow-tool-pre',
      title: 'Appointment Flow Tool',
      description:
        'Functions and looks similar to the current "Notes Document". A scrollable page showing information and progress on each patient leading up to their appointment. Shows Appointments forward two weeks from the current day and back to the date of the oldest unsigned note.',
      top: 92,
      left: 5,
      width: 14,
      height: 5.3,
    },
    {
      id: 'claims-ledger-tool',
      title: 'Claims Ledger Tool',
      description:
        'Functions and looks similar to the current "Notes Document - Table". View clinic submit patient\'s claim and payment status. All patients whose claims are submitted directly to the insurance company, all cash pay patients, any appointment related payments paid directly to the clinic. This interacts directly with SolBoard - claim submissions, status, and payments info that are input in the patients appointment row for the specific encounter in Solboard autopopulate the tool.',
      top: 92,
      left: 20.2,
      width: 14.2,
      height: 5.3,
    },
    {
      id: 'payment-tracker-tool',
      title: 'Payment Tracker Tool',
      description:
        'Functions and looks similar to the current "Cash Pay - Tebra | Chase | Alma | Headway" spreadsheet. This interacts directly with SolBoard - payments input in the Patient Collect field for the specific date of the appointment in Solboard autopopulate the tool.',
      top: 92,
      left: 35.5,
      width: 14.1,
      height: 5.3,
    },
    {
      id: 'note-board-tool-pre',
      title: 'Note Board Tool',
      description:
        'View and track the status of clinical notes. You can filter by date, signed+unsigned (all notes), as well as unsigned and signed individually. Displays from oldest date for an unsigned note to the current date.',
      top: 92,
      left: 50.7,
      width: 11,
      height: 5.3,
    },
  ],
  'post-visit': [
    ...SHARED_TOP_NAV,
    {
      id: 'not-signed-button',
      title: 'Not Signed Button',
      description:
        "Shows the count of unsigned notes for the day's appointments. When selected it filters only Appointment Rows with unsigned notes.",
      top: 30.2,
      left: 28.8,
      width: 9.8,
      height: 3.5,
    },
    {
      id: 'signed-button',
      title: 'Signed Button',
      description:
        "Shows the count of signed notes for the day's appointments. When selected it filters only Appointment Rows with signed notes.",
      top: 30.2,
      left: 39.2,
      width: 8.2,
      height: 3.5,
    },
    {
      id: 'not-submitted-button',
      title: 'Not Submitted Button',
      description:
        "Shows the count of claims not submitted for the day's appointments. When selected it filters only Appointment Rows with claims not yet submitted.",
      top: 30.2,
      left: 48,
      width: 11.4,
      height: 3.5,
    },
    {
      id: 'pending-button',
      title: 'Pending Button',
      description:
        "Shows the count of claims pending for the day's appointments. When selected it filters only Appointment Rows with claims pending.",
      top: 30.2,
      left: 60,
      width: 8.7,
      height: 3.5,
    },
    {
      id: 'paid-button',
      title: 'Paid Button',
      description:
        "Shows the count of claims paid for the day's appointments. When selected it filters only Appointment Rows with claims paid.",
      top: 30.2,
      left: 69.1,
      width: 7,
      height: 3.5,
    },
    {
      id: 'appointment-row-toggle-post',
      title: 'Appointment Row Toggle',
      description:
        'Select to expand the appointment row to display: Billing Channel (Alma, Headway, Grow, Clinic), Insurance Carrier, Claim Status for that specific appointment.',
      top: 43.2,
      left: 0.6,
      width: 2.6,
      height: 6,
    },
    {
      id: 'message-alert',
      title: 'Message Alert',
      description:
        'Icon displays color and number of message alerts pertaining to that specific appointment. 🔴 Red = unread message waiting for you · 🟡 Yellow = your message, not yet read · 🟢 Green = all read, thread up to date.',
      top: 43.7,
      left: 83.7,
      width: 2.8,
      height: 4.2,
    },
    {
      id: 'rx-button',
      title: 'Rx Button',
      description:
        'Select to open the "Controlled Substances Prescribed" window where you can enter the medicine and dosage prescribed to that patient on that date.',
      top: 48.4,
      left: 53.4,
      width: 5.5,
      height: 3.9,
    },
    {
      id: 'cpt-add-button',
      title: 'CPT +Add Button',
      description:
        'Select to open the "CPT Codes" window where you can enter the CPT Codes assigned to the appointment.',
      top: 48.4,
      left: 59.5,
      width: 8.8,
      height: 3.9,
    },
    {
      id: 'mark-note-signed-button',
      title: 'Mark Note Signed Button',
      description:
        'Select to signal that the note for that appointment has been signed. This button also auto-selects when you enter and save CPT Codes in the CPT Code window. The button display changes from "Mark Note Signed" to "Signed". When this button is selected - the Biller has the information in their dashboard that allows them to go forward with submitting a claim for that appointment.',
      top: 48.3,
      left: 83.9,
      width: 10.3,
      height: 4,
    },
    {
      id: 'best-rate-button',
      title: 'Best Rate Button',
      description:
        'Select to open the "Best Billing Channel" window where you can enter CPT Codes and combinations to determine which Billing Channel pays the best rates for the selected codes.',
      top: 48.3,
      left: 94.6,
      width: 5,
      height: 4,
    },
  ],
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getNearestPointOnRect(point, rect) {
  return {
    x: clamp(point.x, rect.left, rect.right),
    y: clamp(point.y, rect.top, rect.bottom),
  };
}

(function initHotspotTour() {
  const pageKey = document.body?.dataset?.page;
  const hotspots = HOTSPOTS[pageKey];
  if (!hotspots) return;

  const hotspotLayer = document.getElementById('hotspotLayer');
  const backdrop = document.getElementById('calloutBackdrop');
  const card = document.getElementById('calloutCard');
  const closeBtn = document.getElementById('calloutClose');
  const titleEl = document.getElementById('calloutTitle');
  const descEl = document.getElementById('calloutDescription');
  const connectorSvg = document.getElementById('connectorSvg');
  const connectorLine = document.getElementById('connectorLine');

  if (!hotspotLayer || !backdrop || !card || !titleEl || !descEl || !connectorSvg || !connectorLine || !closeBtn) {
    return;
  }

  let activeId = null;
  let activeButton = null;

  function updateConnector() {
    if (!activeButton || backdrop.classList.contains('hidden')) return;

    const hotspotRect = activeButton.getBoundingClientRect();
    const calloutRect = card.getBoundingClientRect();

    const start = {
      x: hotspotRect.left + hotspotRect.width / 2,
      y: hotspotRect.top + hotspotRect.height / 2,
    };

    const end = getNearestPointOnRect(start, calloutRect);

    connectorSvg.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
    connectorSvg.setAttribute('width', String(window.innerWidth));
    connectorSvg.setAttribute('height', String(window.innerHeight));

    connectorLine.setAttribute('x1', String(start.x));
    connectorLine.setAttribute('y1', String(start.y));
    connectorLine.setAttribute('x2', String(end.x));
    connectorLine.setAttribute('y2', String(end.y));
  }

  function closeCallout() {
    if (activeButton) activeButton.classList.remove('active');
    activeButton = null;
    activeId = null;
    backdrop.classList.add('hidden');
    backdrop.setAttribute('aria-hidden', 'true');
  }

  function openCallout(hotspot, button) {
    titleEl.textContent = hotspot.title;
    descEl.textContent = hotspot.description;

    if (activeButton) activeButton.classList.remove('active');
    button.classList.add('active');
    activeButton = button;
    activeId = hotspot.id;

    backdrop.classList.remove('hidden');
    backdrop.setAttribute('aria-hidden', 'false');

    requestAnimationFrame(() => {
      updateConnector();
      closeBtn.focus();
    });
  }

  hotspots.forEach((hotspot) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'hotspot-btn';
    button.dataset.id = hotspot.id;
    button.setAttribute('aria-label', hotspot.title);
    button.style.top = `${hotspot.top}%`;
    button.style.left = `${hotspot.left}%`;
    button.style.width = `${hotspot.width}%`;
    button.style.height = `${hotspot.height}%`;

    button.addEventListener('click', () => {
      if (activeId === hotspot.id) {
        closeCallout();
      } else {
        openCallout(hotspot, button);
      }
    });

    hotspotLayer.appendChild(button);
  });

  closeBtn.addEventListener('click', closeCallout);

  document.addEventListener('click', (event) => {
    if (backdrop.classList.contains('hidden')) return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (card.contains(target)) return;
    if (target.closest('.hotspot-btn')) return;
    closeCallout();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeCallout();
    }
  });

  window.addEventListener('resize', updateConnector);
  window.addEventListener('scroll', updateConnector, { passive: true });
})();
