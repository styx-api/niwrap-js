// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_SIMULATE_ATROPHY_METADATA: Metadata = {
    id: "b2e923443b64cd119265f582a44ff716bd98c53c.boutiques",
    name: "mris_simulate_atrophy",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisSimulateAtrophyParameters {
    "__STYXTYPE__": "mris_simulate_atrophy";
    "subject": string;
    "hemi": string;
    "label": string;
    "atrophy_fraction": number;
    "output_volume": string;
    "atrophy_percent"?: number | null | undefined;
    "noise_level"?: number | null | undefined;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "mris_simulate_atrophy": mris_simulate_atrophy_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
        "mris_simulate_atrophy": mris_simulate_atrophy_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_simulate_atrophy(...)`.
 *
 * @interface
 */
interface MrisSimulateAtrophyOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Atrophy simulation output volume.
     */
    output_file: OutputPathType;
}


function mris_simulate_atrophy_params(
    subject: string,
    hemi: string,
    label: string,
    atrophy_fraction: number,
    output_volume: string,
    atrophy_percent: number | null = null,
    noise_level: number | null = null,
): MrisSimulateAtrophyParameters {
    /**
     * Build parameters.
    
     * @param subject Subject identifier
     * @param hemi Hemisphere (e.g. lh or rh)
     * @param label Label of the brain region
     * @param atrophy_fraction Target atrophy fraction
     * @param output_volume Output volume file
     * @param atrophy_percent Percentage atrophy to simulate of structure
     * @param noise_level Gaussian noise level to add
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_simulate_atrophy" as const,
        "subject": subject,
        "hemi": hemi,
        "label": label,
        "atrophy_fraction": atrophy_fraction,
        "output_volume": output_volume,
    };
    if (atrophy_percent !== null) {
        params["atrophy_percent"] = atrophy_percent;
    }
    if (noise_level !== null) {
        params["noise_level"] = noise_level;
    }
    return params;
}


function mris_simulate_atrophy_cargs(
    params: MrisSimulateAtrophyParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_simulate_atrophy");
    cargs.push((params["subject"] ?? null));
    cargs.push((params["hemi"] ?? null));
    cargs.push((params["label"] ?? null));
    cargs.push(String((params["atrophy_fraction"] ?? null)));
    cargs.push((params["output_volume"] ?? null));
    if ((params["atrophy_percent"] ?? null) !== null) {
        cargs.push(
            "-a",
            String((params["atrophy_percent"] ?? null))
        );
    }
    if ((params["noise_level"] ?? null) !== null) {
        cargs.push(
            "-n",
            String((params["noise_level"] ?? null))
        );
    }
    return cargs;
}


function mris_simulate_atrophy_outputs(
    params: MrisSimulateAtrophyParameters,
    execution: Execution,
): MrisSimulateAtrophyOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisSimulateAtrophyOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile([(params["output_volume"] ?? null)].join('')),
    };
    return ret;
}


function mris_simulate_atrophy_execute(
    params: MrisSimulateAtrophyParameters,
    execution: Execution,
): MrisSimulateAtrophyOutputs {
    /**
     * Simulate atrophy on brain structures.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisSimulateAtrophyOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_simulate_atrophy_cargs(params, execution)
    const ret = mris_simulate_atrophy_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_simulate_atrophy(
    subject: string,
    hemi: string,
    label: string,
    atrophy_fraction: number,
    output_volume: string,
    atrophy_percent: number | null = null,
    noise_level: number | null = null,
    runner: Runner | null = null,
): MrisSimulateAtrophyOutputs {
    /**
     * Simulate atrophy on brain structures.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject Subject identifier
     * @param hemi Hemisphere (e.g. lh or rh)
     * @param label Label of the brain region
     * @param atrophy_fraction Target atrophy fraction
     * @param output_volume Output volume file
     * @param atrophy_percent Percentage atrophy to simulate of structure
     * @param noise_level Gaussian noise level to add
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisSimulateAtrophyOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_SIMULATE_ATROPHY_METADATA);
    const params = mris_simulate_atrophy_params(subject, hemi, label, atrophy_fraction, output_volume, atrophy_percent, noise_level)
    return mris_simulate_atrophy_execute(params, execution);
}


export {
      MRIS_SIMULATE_ATROPHY_METADATA,
      MrisSimulateAtrophyOutputs,
      MrisSimulateAtrophyParameters,
      mris_simulate_atrophy,
      mris_simulate_atrophy_params,
};
