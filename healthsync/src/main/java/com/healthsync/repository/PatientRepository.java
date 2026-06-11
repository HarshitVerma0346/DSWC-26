package com.healthsync.repository;

import com.healthsync.dto.PatientBillingSummaryDTO;
import com.healthsync.entity.Patient;
import java.math.BigDecimal;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PatientRepository extends JpaRepository<Patient, Long> {

    @Query("SELECT new com.healthsync.dto.PatientBillingSummaryDTO(p.name, "
            + "CASE TYPE(m) WHEN com.healthsync.entity.PrescriptionRecord THEN 'PRESCRIPTION' "
            + "WHEN com.healthsync.entity.LabResultRecord THEN 'LAB_RESULT' ELSE 'UNKNOWN' END, "
            + "b.currentBalance) "
            + "FROM Patient p "
            + "JOIN p.medicalRecords m "
            + "JOIN p.billingAccount b")
    List<PatientBillingSummaryDTO> fetchPatientBillingSummaries();

    List<Patient> findDistinctByBillingAccountCurrentBalanceGreaterThanAndMedicalRecordsMedicationNameContaining(
            BigDecimal amount,
            String medicationName
    );
}
