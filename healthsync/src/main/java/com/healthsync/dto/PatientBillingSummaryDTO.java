package com.healthsync.dto;

import java.math.BigDecimal;

public class PatientBillingSummaryDTO {

    private final String patientName;
    private final String recordType;
    private final BigDecimal currentBalance;

    public PatientBillingSummaryDTO(String patientName, String recordType, BigDecimal currentBalance) {
        this.patientName = patientName;
        this.recordType = recordType;
        this.currentBalance = currentBalance;
    }

    public String getPatientName() {
        return patientName;
    }

    public String getRecordType() {
        return recordType;
    }

    public BigDecimal getCurrentBalance() {
        return currentBalance;
    }
}
