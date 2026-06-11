package com.healthsync.entity;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("PRESCRIPTION")
public class PrescriptionRecord extends MedicalRecord {

    private String medicationName;
    private String dosage;

    public PrescriptionRecord() {
    }

    public PrescriptionRecord(String medicationName, String dosage) {
        this.medicationName = medicationName;
        this.dosage = dosage;
    }

    public String getMedicationName() {
        return medicationName;
    }

    public void setMedicationName(String medicationName) {
        this.medicationName = medicationName;
    }

    public String getDosage() {
        return dosage;
    }

    public void setDosage(String dosage) {
        this.dosage = dosage;
    }
}
