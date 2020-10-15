---
title: "PASSPort- Procurement and Sourcing Solution"
template: post
slug: Passport
draft: false
featured: true
date: "2018-06-10T15:00:00.000Z"
description: >-
  Reducing the paper process and having all information available in procuremnet Portal.
cover: "./Passport.png"
category: Test
tags:
  - Test
---

## Description

PASSPort is a SAAS product to speed up the process for signing up Vendors and Agencies to procure quick services. This system has replaced city's old paper based system. PASSPort, the City's digital Procurement and Sourcing Solutions Portal, is about to roll out new features designed to make the procurement process easier, more transparent and accessible to all businesses.

Developed with and for vendors, along with City agencies, PASSPort leverages technology to address long-standing issues​ and support faster contract approval, more timely registration, and prompt approval of invoices and payment.

### User Research

We have 86 Agencies in NYC to drive and keep NYC moving forward. Since the begining due to audits, we have conducted business with paper based system. This has made doing business with the city a lot harder.
PASSPort has many actors: Approvers, Requestors, Receivers, Budgets(OMB), Inspectors, etc. With such a multi-faceted system and meeting all users needs requires us to talk to all users (Vendors and Agencies).
I started with building user profiles based on their roles to derive role based Persona.

## Persona

Here are few sample Personas:

Vendor:
Peter Morris, Owner of ABC Holdings, Inc.
Goals: Peter wants conduct business with NYC after bidding on several contracts to generate income. Being a business owner, he needs to sign up with a system where he has transparency and easy access to upload his documents(Catalogs, Responsibility Determination, Tax, etc.) and trace the approvals. With current paper based system, it is hard for him to send documents to several different derpartments and not having transparency on where his application stands.

Agency:
Mary Gratz , Agency Acco
Goals: Mary, as being an agency Acco, needs to approve many contracts and Purchase orders. She needs a notification mechanism and electronic signature to get her work done. All approval tasks are paper based which requires her to look through 700-800 pages long contracts and pay attention to each task/approvals before she signs it. It can take upto 30-40 days and she becomes an impediment in this whole process.

## Scenarios and Task Flow Diagram

With the help of the research, I created scenarios to do some gap analysis on the critical scenarios.

Scenario: As a DoITT Approver, I will login to PASSPort, go through the catalogs from different vendors to approve so that agencies can buy off through these vendors.

For this, I designed a taskflow:

<ul style="list-style-type:none;">
<li> 1. Login to the system with provisioned username and password. </li>
<li> 2. View notifications to approve </li>
<li> 3. Select Notification </li>
<li> 4. View Catalog </li>
<li> 5. Approve Catalog </li>
</ul>

![Task Flow : Catalog Approval](/TF.png)

## Screeners and Interviews

I wanted to gather quick feedback from the users before creating working prototypes. So I created screeners to qualify Vendors and Agency Managers. After gathering the feedback, I qualified some users to test this.

During interviews, I found out this wasn't as straight forward due to multiple points of failure within the system. Users werent happy with local csv files that were removing characters. We needed to provide the downloadable file/format on the system.

## Prototype and Testing

I created the prototype and conducted the test in a workshop and with bigger number of participants to add more to workflow and create awareness of the new design.

![Catalog : Upload](/catalog.png)

The Approval Process- Final Design

![Workflow : Approval](/Final.png)

## In the Nutshell

I have held many design workshops for the other parts of the system and have used User Centered Design (UCD) approach. Due to the complexity of the system, we have also missed on some opportunities but as we are releasing new modules, we are incorporating more of analytical (Quantitative Analysis) along with more open dialogues with users.
