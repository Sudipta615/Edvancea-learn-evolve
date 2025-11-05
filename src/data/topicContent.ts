// src/data/topicContent.ts

export interface TopicContent {
  topicId: string;
  content: string;
}

export const topicContents: TopicContent[] = [
  // ==================== EXCEL BEGINNER ====================
  {
    topicId: "excel-basic-formulas",
    content: `
<div class="topic-content">
  <h1>Mastering Basic Excel Formulas</h1>
  <p>Formulas are the heart of Excel. They allow you to perform calculations, manipulate text, and analyze data instantly. Let's start with the essentials that everyone uses daily.</p>
  
  <div class="content-image">
    <img src="https://placehold.co/800x400/107C41/FFFFFF?text=SUM+AVERAGE+COUNT" alt="Excel Basic Formulas Banner" />
  </div>

  <section>
    <h2>The Big Three: SUM, AVERAGE, COUNT</h2>
    <div class="benefits-grid">
      <div class="benefit-card">
        <h3>➕ SUM</h3>
        <p>Adds up all numbers in a range of cells.</p>
        <code>=SUM(A1:A10)</code>
      </div>
      <div class="benefit-card">
        <h3>zj AVERAGE</h3>
        <p>Calculates the average (mean) value.</p>
        <code>=AVERAGE(B1:B20)</code>
      </div>
      <div class="benefit-card">
        <h3>PX COUNT</h3>
        <p>Counts how many cells contain numbers.</p>
        <code>=COUNT(C1:C100)</code>
      </div>
    </div>
  </section>

  <section>
    <h2>Step-by-Step: Writing Your First Formula</h2>
    <div class="step-card">
      <h3>How to Enter a Formula</h3>
      <ol>
        <li>Click the cell where you want the result (e.g., <strong>D1</strong>).</li>
        <li>Type the equals sign <code>=</code>. This tells Excel you are starting a formula.</li>
        <li>Type your formula, for example: <code>=SUM(</code></li>
        <li>Select the cells you want to add with your mouse (e.g., A1 to A5).</li>
        <li>Press <strong>Enter</strong>. Excel will close the parenthesis and show the result.</li>
      </ol>
      <div class="content-image">
        <img src="https://placehold.co/700x300/e5e7eb/1f2937?text=Select+Cell+%3E+Type+=+%3E+Enter+Formula" alt="Steps to enter a formula" />
      </div>
    </div>
  </section>
</div>
    `
  },
  {
    topicId: "excel-cell-referencing",
    content: `
<div class="topic-content">
  <h1>Understanding Cell Referencing</h1>
  <p>Cell references are addresses in Excel (like A1, B2). Understanding how they behave when you copy formulas is crucial for working efficiently.</p>

  <section>
    <h2>Relative vs. Absolute References</h2>
    <p>By default, Excel uses <strong>Relative</strong> references. When you copy a formula, the reference changes based on where you paste it. Sometimes, you don't want this!</p>
    
    <div class="benefits-grid">
      <div class="benefit-card">
        <h3>Relative (A1)</h3>
        <p>Changes when copied. Good for repeating standard calculations down a column.</p>
      </div>
      <div class="benefit-card">
        <h3>Absolute ($A$1)</h3>
        <p>Stays locked to a specific cell. Use the <code>$</code> sign to lock the column and/or row.</p>
      </div>
    </div>

    <div class="content-image">
        <img src="https://placehold.co/800x450/2563eb/ffffff?text=A1+vs+$A$1" alt="Visual comparison of A1 moving vs $A$1 staying locked" />
    </div>
  </section>

  <div class="step-card">
    <h3>Pro Tip: F4 Shortcut</h3>
    <p>Don't type the dollar signs manually! Click on a cell reference in your formula bar and press <strong>F4</strong> on your keyboard to cycle through different reference types:</p>
    <ul>
      <li>Press once: <code>$A$1</code> (Absolute column & row)</li>
      <li>Press twice: <code>A$1</code> (Relative column, Absolute row)</li>
      <li>Press thrice: <code>$A1</code> (Absolute column, Relative row)</li>
    </ul>
  </div>
</div>
    `
  },
  {
    topicId: "excel-data-formatting",
    content: `
<div class="topic-content">
  <h1>Professional Data Formatting</h1>
  <p>Presentation matters. Unformatted data is hard to read. Learn how to make your spreadsheets look clean, professional, and easy to understand.</p>

  <section>
    <h2>Key Formatting Tools</h2>
    <div class="benefits-grid">
      <div class="benefit-card">
        <h3>💲 Currency & Accounting</h3>
        <p>Add dollar signs, commas, and standardized decimal places instantly.</p>
      </div>
      <div class="benefit-card">
        <h3>📅 Date & Time</h3>
        <p>Ensure dates are consistent (e.g., "DD/MM/YYYY" vs "MM/DD/YY").</p>
      </div>
      <div class="benefit-card">
        <h3>💯 Percentage</h3>
        <p>Convert decimals (0.5) to readable percentages (50%) with one click.</p>
      </div>
    </div>
  </section>

  <div class="step-card">
    <h3>Standard Professional Look</h3>
    <ol>
      <li><strong>Headers:</strong> Make them <strong>Bold</strong> and give them a distinct background color (like dark blue with white text).</li>
      <li><strong>Gridlines:</strong> Often, turning off default gridlines (View > uncheck Gridlines) makes a sheet look cleaner.</li>
      <li><strong>Borders:</strong> Use subtle light gray borders to separate data, rather than thick black lines.</li>
    </ol>
    <div class="content-image">
      <img src="https://placehold.co/700x400/f3f4f6/374151?text=Before+vs+After+Formatting" alt="Before and after comparison of a data table" />
    </div>
  </div>
</div>
    `
  },
  {
    topicId: "excel-creating-charts",
    content: `
<div class="topic-content">
  <h1>Visualizing Data with Charts</h1>
  <p>A picture is worth a thousand numbers. Charts help you spot trends, outliers, and patterns that raw data hides.</p>

  <section>
    <h2>Choosing the Right Chart</h2>
    <div class="benefits-grid">
      <div class="benefit-card">
        <h3>📊 Column/Bar Chart</h3>
        <p>Best for comparing different categories side-by-side (e.g., Sales by Month).</p>
      </div>
      <div class="benefit-card">
        <h3>📈 Line Chart</h3>
        <p>Perfect for showing trends over time (e.g., Stock price over a year).</p>
      </div>
      <div class="benefit-card">
        <h3>🥧 Pie Chart</h3>
        <p>Good for showing parts of a whole (e.g., Market share percentage). Use sparingly!</p>
      </div>
    </div>
  </section>

  <div class="step-card">
    <h3>Quick Chart Shortcut</h3>
    <p>Select your data range and press <strong>Alt + F1</strong> (Windows) or <strong>Option + F1</strong> (Mac) to instantly create a default chart on your current sheet.</p>
  </div>
</div>
    `
  },

  // ==================== FINANCE BEGINNER ====================
  {
    topicId: "finance-journal-entries",
    content: `
<div class="topic-content">
  <h1>The Foundation: Journal Entries</h1>
  <p>Every financial transaction starts here. A journal entry is the first official record of a business transaction. It follows the double-entry bookkeeping system.</p>

  <section>
    <h2>Double-Entry Rule</h2>
    <p class="text-xl font-semibold text-center my-6">Every Debit must have an equal and corresponding Credit.</p>
    <div class="content-image">
      <img src="https://placehold.co/800x300/1e40af/ffffff?text=Assets+%3D+Liabilities+%2B+Equity" alt="Accounting Equation" />
    </div>
  </section>

  <section>
    <h2>Golden Rules of Accounting</h2>
    <div class="benefits-grid">
      <div class="benefit-card">
        <h3>Real Accounts (Assets)</h3>
        <p>Debit what comes IN.<br/>Credit what goes OUT.</p>
      </div>
      <div class="benefit-card">
        <h3>Personal Accounts (People/Entities)</h3>
        <p>Debit the RECEIVER.<br/>Credit the GIVER.</p>
      </div>
      <div class="benefit-card">
        <h3>Nominal Accounts (Income/Expense)</h3>
        <p>Debit all EXPENSES & LOSSES.<br/>Credit all INCOMES & GAINS.</p>
      </div>
    </div>
  </section>
</div>
    `
  },
  {
    topicId: "finance-ledger-posting",
    content: `
<div class="topic-content">
  <h1>Ledger Posting: Organizing the Chaos</h1>
  <p>After journal entries are made, they need to be organized. The Ledger is the "principal book" where transactions are classified into separate accounts (e.g., Cash A/c, Sales A/c).</p>

  <div class="step-card">
    <h3>The T-Account Format</h3>
    <p>Ledger accounts often look like a 'T'. The left side is ALWAYS Debit (Dr.), and the right side is ALWAYS Credit (Cr.).</p>
    <div class="content-image">
      <img src="https://placehold.co/600x400/f8fafc/0f172a?text=Dr.+|+Cash+Account+|+Cr.\n1000+|+500\n200+|+100" alt="T-Account Example" />
    </div>
  </div>
</div>
    `
  },
  {
    topicId: "finance-trial-balance",
    content: `
<div class="topic-content">
  <h1>The Trial Balance</h1>
  <p>A Trial Balance is a statement that lists the balances of all ledger accounts at a specific point in time. Its primary purpose is to ensure that Total Debits equal Total Credits.</p>

  <section>
    <h2>Why Prepare It?</h2>
    <ul>
      <li>Checks arithmetical accuracy of postings.</li>
      <li>Provides a summary of all financial activities.</li>
      <li>It is the prerequisite for preparing final financial statements.</li>
    </ul>
  </section>

  <div class="content-image">
    <img src="https://placehold.co/800x500/fff7ed/9a3412?text=Trial+Balance+Format\nAccount+Name+|+Debit+|+Credit" alt="Trial Balance Example Format" />
  </div>
</div>
    `
  },

  // ==================== POWERPOINT BEGINNER ====================
  {
    topicId: "ppt-creating-slides",
    content: `
<div class="topic-content">
  <h1>Creating Your First Slides</h1>
  <p>PowerPoint is about telling a story. Start by building the skeleton of your presentation with the right slides.</p>

  <section>
    <h2>Understanding Layouts</h2>
    <p>Don't just use blank slides! PowerPoint offers optimized layouts that keep your content aligned.</p>
    <div class="benefits-grid">
      <div class="benefit-card">
        <h3>Title Slide</h3>
        <p>Use this ONLY for the very first slide. It sets the stage.</p>
      </div>
      <div class="benefit-card">
        <h3>Title and Content</h3>
        <p>Your bread and butter. A clear header with a bulleted list or an image below.</p>
      </div>
      <div class="benefit-card">
        <h3>Two Content</h3>
        <p>Perfect for side-by-side comparisons (e.g., Pros vs Cons).</p>
      </div>
    </div>
  </section>

  <div class="step-card">
    <h3>Adding a New Slide</h3>
    <p>You can click the "New Slide" button, but the shortcut is faster: <strong>Ctrl + M</strong> (Windows/Mac) creates a new slide instantly using the current layout.</p>
  </div>
</div>
    `
  },
  {
    topicId: "ppt-text-images",
    content: `
<div class="topic-content">
  <h1>Working with Text & Images</h1>
  <p>Avoid "Death by PowerPoint" by balancing your text with impactful visuals. Less text is often more.</p>

  <section>
    <h2>Text Best Practices</h2>
    <ul>
      <li><strong>6x6 Rule:</strong> Aim for no more than 6 bullets per slide, and 6 words per bullet.</li>
      <li><strong>Font Size:</strong> Keep main text above 24pt so people at the back can read it.</li>
      <li><strong>Contrast:</strong> Dark text on light backgrounds, or light text on dark backgrounds.</li>
    </ul>
  </section>

  <div class="step-card">
    <h3>Inserting High-Quality Images</h3>
    <p>Don't stretch small images! It makes them pixelated.</p>
    <ol>
      <li>Go to <strong>Insert > Pictures</strong>.</li>
      <li>Choose <strong>Stock Images</strong> for high-quality, royalty-free photos provided by Microsoft.</li>
      <li>Use the <strong>Crop</strong> tool to fit the image to your slide without distorting it.</li>
    </ol>
    <div class="content-image">
      <img src="https://placehold.co/700x400/ea580c/ffffff?text=Impactful+Visuals" alt="Example of a slide with good text-image balance" />
    </div>
  </div>
</div>
    `
  },

  // ==================== VIDEO EDITING BEGINNER ====================
  {
    topicId: "video-importing-media",
    content: `
<div class="topic-content">
  <h1>Getting Started: Importing Media</h1>
  <p>Before you can edit, you need to get your raw footage into your editor (like PowerDirector, Premiere, or DaVinci).</p>

  <section>
    <h2>Organization is Key</h2>
    <p>Video projects get messy FAST. Before importing, organize your files on your computer:</p>
    <ul class="list-disc pl-6 mb-6">
      <li>📁 Project Name
        <ul class="list-disc pl-6 mt-2">
          <li>📁 Footage / Video</li>
          <li>📁 Audio / Music</li>
          <li>📁 Graphics / Assets</li>
        </ul>
      </li>
    </ul>
  </section>

  <div class="step-card">
    <h3>The Media Bin</h3>
    <p>Drag your organized folders directly into the "Media Bin" or "Project Panel" of your editor. Most modern editors will keep your folder structure intact!</p>
    <div class="content-image">
      <img src="https://placehold.co/800x450/9333ea/ffffff?text=Media+Bin+Interface" alt="Media Bin showing organized folders" />
    </div>
  </div>
</div>
    `
  },
  {
    topicId: "video-basic-cuts",
    content: `
<div class="topic-content">
  <h1>The Art of the Cut</h1>
  <p>Editing is primarily about deciding what NOTTp show. Basic cutting and trimming are 90% of the job.</p>

  <section>
    <h2>Key Concepts</h2>
    <div class="benefits-grid">
      <div class="benefit-card">
        <h3>✂️ The Cut</h3>
        <p>Splitting one clip into two. Shortcut is usually 'C' or 'Ctrl/Cmd + K'.</p>
      </div>
      <div class="benefit-card">
        <h3>↔️ Trimming</h3>
        <p>Shortening the beginning (head) or end (tail) of a clip.</p>
      </div>
      <div class="benefit-card">
        <h3>🌊 Ripple Delete</h3>
        <p>Deleting a clip and automatically closing the gap it left behind.</p>
      </div>
    </div>
  </section>

  <div class="step-card">
    <h3>Your First Assembly</h3>
    <ol>
      <li>Drag your best clips onto the <strong>Timeline</strong>.</li>
      <li>Watch through and use the <strong>Cut</strong> tool to remove boring pauses or mistakes.</li>
      <li>Drag the remaining good clips together so there are no black gaps.</li>
    </ol>
    <div class="content-image">
      <img src="https://placehold.co/800x300/1f2937/6b7280?text=Timeline+Sequence" alt="Video timeline with multiple clips assembled" />
    </div>
  </div>
</div>
    `
  },

  // ==================== EXCEL ADVANCED (Existing Example Kept) ====================
  {
    topicId: "excel-macros",
    content: `
<div class="topic-content">
  <h1>The Ultimate Guide to Excel Macros</h1>
  
  <section>
    <h2>What is a Macro?</h2>
    <p>A macro is an action or a set of actions that you can run as many times as you want. When you create a macro, you are recording your mouse clicks and keystrokes. After you create a macro, you can edit it to make minor changes.</p>
    <div class="content-image">
      <img src="https://placehold.co/800x400/4F46E5/FFFFFF?text=Automation+Concept" alt="Macro automation concept illustration" />
    </div>
  </section>

  <section>
    <h2>Why Use Macros?</h2>
    <div class="benefits-grid">
      <div class="benefit-card">
        <h3>⚡ Automation</h3>
        <p>Automate repetitive tasks like formatting reports.</p>
      </div>
      <div class="benefit-card">
        <h3>🚀 Speed</h3>
        <p>Save hours of manual work with a single click.</p>
      </div>
      <div class="benefit-card">
        <h3>✓ Consistency</h3>
        <p>Ensure tasks are performed the exact same way every time.</p>
      </div>
      <div class="benefit-card">
        <h3>🔗 Integration</h3>
        <p>Combine multiple Excel steps into one powerful command.</p>
      </div>
    </div>
  </section>

  <section>
    <h2>Step-by-Step Guide: Your First Macro</h2>
    
    <div class="step-card">
      <h3>Step 1: Enable the Developer Tab</h3>
      <p>The Developer tab isn't visible by default. You need to enable it first.</p>
      <ol>
        <li>Go to <strong>File &gt; Options</strong>.</li>
        <li>In the Excel Options window, click <strong>Customize Ribbon</strong>.</li>
        <li>On the right, check the box for <strong>Developer</strong> and click <strong>OK</strong>.</li>
      </ol>
      <div class="content-image">
        <img src="https://placehold.co/700x450/E5E7EB/1F2937?text=Enable+Developer+Tab" alt="Screenshot showing how to enable the Developer tab in Excel Options" />
      </div>
    </div>

    <div class="step-card">
      <h3>Step 2: Record the Macro</h3>
      <p>Let's record a simple macro that formats a cell with a yellow background and bold text.</p>
      <ol>
        <li>Click on any empty cell (e.g., A1).</li>
        <li>Go to the <strong>Developer</strong> tab and click <strong>Record Macro</strong>.</li>
        <li>Give your macro a name (e.g., <code>FormatYellowBold</code>). You can also assign a shortcut key.</li>
        <li>Click <strong>OK</strong>. Excel is now recording your every move.</li>
        <li>Perform the actions: Fill the cell with a yellow color and make the text <strong>Bold</strong>.</li>
        <li>Go back to the <strong>Developer</strong> tab and click <strong>Stop Recording</strong>.</li>
      </ol>
    </div>

    <div class="step-card">
      <h3>Step 3: Run Your Macro</h3>
      <p>The magic happens here.</p>
      <ol>
        <li>Click on any other empty cell (e.g., B2).</li>
        <li>Go to the <strong>Developer</strong> tab and click <strong>Macros</strong>.</li>
        <li>Select <code>FormatYellowBold</code> from the list and click <strong>Run</strong>.</li>
        <li>Cell B2 will instantly be formatted with a yellow background and bold text!</li>
      </ol>
    </div>
  </section>
</div>
    `
  }
];

export const getTopicContent = (topicId: string): string => {
  const content = topicContents.find(tc => tc.topicId === topicId);
  return content?.content || `
    <div class="topic-content">
      <h1>Coming Soon</h1>
      <div class="content-image">
        <img src="https://placehold.co/800x400/f3f4f6/9ca3af?text=Content+Under+Construction" alt="Under Construction" />
      </div>
      <p>This comprehensive guide is currently being prepared by our experts. Check back soon for detailed, step-by-step content with visuals and examples.</p>
    </div>
  `;
};
