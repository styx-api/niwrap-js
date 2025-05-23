// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_BRAINVOL_STATS_METADATA: Metadata = {
    id: "c877d6340e668db7a7474940a374e9ec8e23aa12.boutiques",
    name: "mri_brainvol_stats",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriBrainvolStatsParameters {
    "__STYXTYPE__": "mri_brainvol_stats";
    "subject_id": string;
    "xml_string"?: string | null | undefined;
    "no_surface": boolean;
    "include_segmentation": boolean;
    "output_file"?: string | null | undefined;
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
        "mri_brainvol_stats": mri_brainvol_stats_cargs,
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
        "mri_brainvol_stats": mri_brainvol_stats_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_brainvol_stats(...)`.
 *
 * @interface
 */
interface MriBrainvolStatsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Brain volume statistics output file.
     */
    brain_vol_stats_output: OutputPathType | null;
}


function mri_brainvol_stats_params(
    subject_id: string,
    xml_string: string | null = null,
    no_surface: boolean = false,
    include_segmentation: boolean = false,
    output_file: string | null = null,
): MriBrainvolStatsParameters {
    /**
     * Build parameters.
    
     * @param subject_id The subject ID for which brain volume statistics are computed
     * @param xml_string XML string containing input data. The XML is used to define additional parameters for computation.
     * @param no_surface Flag to specify that surface-based measurements should not be included in the output.
     * @param include_segmentation Flag to include segmentation information in the brain volume calculations.
     * @param output_file Output file path to write the brain volume statistics.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_brainvol_stats" as const,
        "subject_id": subject_id,
        "no_surface": no_surface,
        "include_segmentation": include_segmentation,
    };
    if (xml_string !== null) {
        params["xml_string"] = xml_string;
    }
    if (output_file !== null) {
        params["output_file"] = output_file;
    }
    return params;
}


function mri_brainvol_stats_cargs(
    params: MriBrainvolStatsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_brainvol_stats");
    cargs.push(
        "--subject",
        (params["subject_id"] ?? null)
    );
    if ((params["xml_string"] ?? null) !== null) {
        cargs.push(
            "--xml",
            (params["xml_string"] ?? null)
        );
    }
    if ((params["no_surface"] ?? null)) {
        cargs.push("--no-surface");
    }
    if ((params["include_segmentation"] ?? null)) {
        cargs.push("--seg");
    }
    if ((params["output_file"] ?? null) !== null) {
        cargs.push(
            "--out",
            (params["output_file"] ?? null)
        );
    }
    return cargs;
}


function mri_brainvol_stats_outputs(
    params: MriBrainvolStatsParameters,
    execution: Execution,
): MriBrainvolStatsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriBrainvolStatsOutputs = {
        root: execution.outputFile("."),
        brain_vol_stats_output: ((params["output_file"] ?? null) !== null) ? execution.outputFile([(params["output_file"] ?? null)].join('')) : null,
    };
    return ret;
}


function mri_brainvol_stats_execute(
    params: MriBrainvolStatsParameters,
    execution: Execution,
): MriBrainvolStatsOutputs {
    /**
     * Tool for computing brain volume statistics with FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriBrainvolStatsOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_brainvol_stats_cargs(params, execution)
    const ret = mri_brainvol_stats_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_brainvol_stats(
    subject_id: string,
    xml_string: string | null = null,
    no_surface: boolean = false,
    include_segmentation: boolean = false,
    output_file: string | null = null,
    runner: Runner | null = null,
): MriBrainvolStatsOutputs {
    /**
     * Tool for computing brain volume statistics with FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject_id The subject ID for which brain volume statistics are computed
     * @param xml_string XML string containing input data. The XML is used to define additional parameters for computation.
     * @param no_surface Flag to specify that surface-based measurements should not be included in the output.
     * @param include_segmentation Flag to include segmentation information in the brain volume calculations.
     * @param output_file Output file path to write the brain volume statistics.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriBrainvolStatsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_BRAINVOL_STATS_METADATA);
    const params = mri_brainvol_stats_params(subject_id, xml_string, no_surface, include_segmentation, output_file)
    return mri_brainvol_stats_execute(params, execution);
}


export {
      MRI_BRAINVOL_STATS_METADATA,
      MriBrainvolStatsOutputs,
      MriBrainvolStatsParameters,
      mri_brainvol_stats,
      mri_brainvol_stats_params,
};
