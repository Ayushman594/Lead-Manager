package leadmanager.dto;

import leadmanager.Entity.LeadStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LeadResponseDTO {
	private Integer leadId;
    private String name;
    private String email;
    private String phone;
    private String company;
    private String source;
    private LeadStatus status;
}
