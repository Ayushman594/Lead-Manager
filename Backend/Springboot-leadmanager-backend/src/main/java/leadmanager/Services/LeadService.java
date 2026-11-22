package leadmanager.Services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import leadmanager.Entity.Lead;
import leadmanager.Entity.LeadStatus;
import leadmanager.Repository.LeadRepo;
import leadmanager.dto.LeadRequestdto;
import leadmanager.dto.LeadResponseDTO;

@Service
public class LeadService {
   private LeadRepo leadrepo;
   
   public LeadService(LeadRepo leadrepo) {
	   this.leadrepo=leadrepo;
   }
   
   public List<LeadResponseDTO> getAllLeads() {

	    return leadrepo.findAll()
	            .stream()
	            .map(this::convertToResponseDTO)
	            .collect(Collectors.toList());
	}
   
   public LeadResponseDTO getLeadById(int id) {

	    Lead lead = leadrepo.findById(id)
	            .orElseThrow(() ->
	                new ResponseStatusException(
	                    HttpStatus.NOT_FOUND, "Lead not found"
	                )
	            );

	    return convertToResponseDTO(lead);
	}
    
   public LeadResponseDTO updateLead(int id, LeadRequestdto dto) {

	    Lead lead = leadrepo.findById(id)
	            .orElseThrow(() ->
	                new ResponseStatusException(
	                    HttpStatus.NOT_FOUND, "Lead not found"
	                )
	            );

	    lead.setName(dto.getName());
	    lead.setEmail(dto.getEmail());
	    lead.setPhone(dto.getPhone());
	    lead.setCompany(dto.getCompany());
	    lead.setSource(dto.getSource());

	    if (dto.getStatus() != null) {
	        lead.setStatus(dto.getStatus());
	    }

	    Lead updatedLead = leadrepo.save(lead);

	    return convertToResponseDTO(updatedLead);
	}
   
   public void deleteLead(int id) {

	    if (!leadrepo.existsById(id)) {
	        throw new ResponseStatusException(
	            HttpStatus.NOT_FOUND, "Lead not found"
	        );
	    }

	    leadrepo.deleteById(id);
	}
   
   public List<LeadResponseDTO> searchLeadsByName(String name) {
	    return leadrepo.findByNameContainingIgnoreCase(name)
	            .stream()
	            .map(this::convertToResponseDTO)
	            .collect(Collectors.toList());
	}

	public List<LeadResponseDTO> filterLeadsByStatus(LeadStatus status) {
	    return leadrepo.findByStatus(status)
	            .stream()
	            .map(this::convertToResponseDTO)
	            .collect(Collectors.toList());
	}
   
   public LeadResponseDTO addLead(LeadRequestdto dto) {

       Lead lead = new Lead();

       lead.setName(dto.getName());
       lead.setEmail(dto.getEmail());
       lead.setPhone(dto.getPhone());
       lead.setCompany(dto.getCompany());
       lead.setSource(dto.getSource());

       lead.setStatus(
           dto.getStatus() == null ? LeadStatus.NEW : dto.getStatus()
       );

       Lead savedLead = leadrepo.save(lead);

       return convertToResponseDTO(savedLead);
   }

   // Convert Entity into Response DTO
   private LeadResponseDTO convertToResponseDTO(Lead lead) {

       return new LeadResponseDTO(
           lead.getLeadId(),
           lead.getName(),
           lead.getEmail(),
           lead.getPhone(),
           lead.getCompany(),
           lead.getSource(),
           lead.getStatus()
       );
   }
   
   
   
}
