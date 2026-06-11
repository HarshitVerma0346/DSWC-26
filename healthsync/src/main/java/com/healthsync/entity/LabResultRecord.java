package com.healthsync.entity;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("LAB_RESULT")
public class LabResultRecord extends MedicalRecord {

    private String labName;
    private String resultValue;

    public LabResultRecord() {
    }

    public LabResultRecord(String labName, String resultValue) {
        this.labName = labName;
        this.resultValue = resultValue;
    }

    public String getLabName() {
        return labName;
    }

    public void setLabName(String labName) {
        this.labName = labName;
    }

    public String getResultValue() {
        return resultValue;
    }

    public void setResultValue(String resultValue) {
        this.resultValue = resultValue;
    }
}
