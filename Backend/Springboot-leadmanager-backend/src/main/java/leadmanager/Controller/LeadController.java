package leadmanager.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import leadmanager.dto.LeadRequestdto;
import leadmanager.dto.LeadResponseDTO;
import leadmanager.Entity.LeadStatus;
import leadmanager.Services.LeadService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/leads")
public class LeadController {

    private final LeadService leadService;

    // Constructor injection
    public LeadController(LeadService leadService) {
        this.leadService = leadService;
    }

    // Add Lead
    @PostMapping
    public ResponseEntity<LeadResponseDTO> addLead(
            @Valid @RequestBody LeadRequestdto dto) {

        return new ResponseEntity<>(
                leadService.addLead(dto), HttpStatus.CREATED);
    }

    // Get All Leads
    @GetMapping
    public ResponseEntity<List<LeadResponseDTO>> getAllLeads() {

        return ResponseEntity.ok(leadService.getAllLeads());
    }
    
    
    @GetMapping("/search")
    public ResponseEntity<List<LeadResponseDTO>> searchLeads(
            @RequestParam String name) {

        return ResponseEntity.ok(
                leadService.searchLeadsByName(name)
        );
    }

    @GetMapping("/filter")
    public ResponseEntity<List<LeadResponseDTO>> filterLeads(
            @RequestParam LeadStatus status) {

        return ResponseEntity.ok(
                leadService.filterLeadsByStatus(status)
        );
    }
    
    // Get Lead By ID
    @GetMapping("/{id}")
    public ResponseEntity<LeadResponseDTO> getLeadById(
            @PathVariable int id) {

        return ResponseEntity.ok(leadService.getLeadById(id));
    }

    // Update Lead
    @PutMapping("/{id}")
    public ResponseEntity<LeadResponseDTO> updateLead(
            @PathVariable int id,
            @Valid @RequestBody LeadRequestdto dto) {

        return ResponseEntity.ok(
                leadService.updateLead(id, dto));
    }

    // Delete Lead
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLead(
            @PathVariable int id) {

        leadService.deleteLead(id);

        return ResponseEntity.noContent().build();
    }
}

