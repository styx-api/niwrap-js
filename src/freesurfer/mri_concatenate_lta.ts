// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_CONCATENATE_LTA_METADATA: Metadata = {
    id: "954e185b276c52b9e741616fe3781dbd26c9152a.boutiques",
    name: "mri_concatenate_lta",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriConcatenateLtaParameters {
    "__STYXTYPE__": "mri_concatenate_lta";
    "lta_1": InputPathType;
    "lta_2": InputPathType;
    "lta_final": string;
    "tal_src"?: InputPathType | null | undefined;
    "tal_template"?: InputPathType | null | undefined;
    "invert1": boolean;
    "invert2": boolean;
    "invertout": boolean;
    "out_type"?: number | null | undefined;
    "subject"?: string | null | undefined;
    "rmsdiff_radius"?: number | null | undefined;
    "rmsdiff_outputfile"?: string | null | undefined;
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
        "mri_concatenate_lta": mri_concatenate_lta_cargs,
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
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_concatenate_lta(...)`.
 *
 * @interface
 */
interface MriConcatenateLtaOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mri_concatenate_lta_params(
    lta_1: InputPathType,
    lta_2: InputPathType,
    lta_final: string,
    tal_src: InputPathType | null = null,
    tal_template: InputPathType | null = null,
    invert1: boolean = false,
    invert2: boolean = false,
    invertout: boolean = false,
    out_type: number | null = null,
    subject: string | null = null,
    rmsdiff_radius: number | null = null,
    rmsdiff_outputfile: string | null = null,
): MriConcatenateLtaParameters {
    /**
     * Build parameters.
    
     * @param lta_1 File for LTA transformation that maps some src1 to dst1
     * @param lta_2 File for LTA transformation that maps dst1 (src2) to dst2
     * @param lta_final File for the combined LTA maps: src1 to dst2 = LTA2*LTA1
     * @param tal_src Specify source (file1) for Talairach transformation
     * @param tal_template Specify template (file2) for Talairach transformation
     * @param invert1 Invert LTA1 before applying it
     * @param invert2 Invert LTA2 before applying it
     * @param invertout Invert output LTA
     * @param out_type Set final LTA type: 0 for VOX2VOX (default), 1 for RAS2RAS
     * @param subject Set subject in output LTA
     * @param rmsdiff_radius Radius used for computing RMS diff between transforms
     * @param rmsdiff_outputfile Output file for RMS diff computation. Use 'nofile' to skip output
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_concatenate_lta" as const,
        "lta_1": lta_1,
        "lta_2": lta_2,
        "lta_final": lta_final,
        "invert1": invert1,
        "invert2": invert2,
        "invertout": invertout,
    };
    if (tal_src !== null) {
        params["tal_src"] = tal_src;
    }
    if (tal_template !== null) {
        params["tal_template"] = tal_template;
    }
    if (out_type !== null) {
        params["out_type"] = out_type;
    }
    if (subject !== null) {
        params["subject"] = subject;
    }
    if (rmsdiff_radius !== null) {
        params["rmsdiff_radius"] = rmsdiff_radius;
    }
    if (rmsdiff_outputfile !== null) {
        params["rmsdiff_outputfile"] = rmsdiff_outputfile;
    }
    return params;
}


function mri_concatenate_lta_cargs(
    params: MriConcatenateLtaParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_concatenate_lta");
    cargs.push(execution.inputFile((params["lta_1"] ?? null)));
    cargs.push(execution.inputFile((params["lta_2"] ?? null)));
    cargs.push((params["lta_final"] ?? null));
    if ((params["tal_src"] ?? null) !== null) {
        cargs.push(
            "-tal",
            execution.inputFile((params["tal_src"] ?? null))
        );
    }
    if ((params["tal_template"] ?? null) !== null) {
        cargs.push(execution.inputFile((params["tal_template"] ?? null)));
    }
    if ((params["invert1"] ?? null)) {
        cargs.push("-invert1");
    }
    if ((params["invert2"] ?? null)) {
        cargs.push("-invert2");
    }
    if ((params["invertout"] ?? null)) {
        cargs.push("-invertout");
    }
    if ((params["out_type"] ?? null) !== null) {
        cargs.push(
            "-out_type",
            String((params["out_type"] ?? null))
        );
    }
    if ((params["subject"] ?? null) !== null) {
        cargs.push(
            "-subject",
            (params["subject"] ?? null)
        );
    }
    if ((params["rmsdiff_radius"] ?? null) !== null) {
        cargs.push(
            "-rmsdiff",
            String((params["rmsdiff_radius"] ?? null))
        );
    }
    if ((params["rmsdiff_outputfile"] ?? null) !== null) {
        cargs.push((params["rmsdiff_outputfile"] ?? null));
    }
    return cargs;
}


function mri_concatenate_lta_outputs(
    params: MriConcatenateLtaParameters,
    execution: Execution,
): MriConcatenateLtaOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriConcatenateLtaOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mri_concatenate_lta_execute(
    params: MriConcatenateLtaParameters,
    execution: Execution,
): MriConcatenateLtaOutputs {
    /**
     * Concatenates two consecutive LTA transformations into one overall transformation, Out = LTA2*LTA1.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriConcatenateLtaOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_concatenate_lta_cargs(params, execution)
    const ret = mri_concatenate_lta_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_concatenate_lta(
    lta_1: InputPathType,
    lta_2: InputPathType,
    lta_final: string,
    tal_src: InputPathType | null = null,
    tal_template: InputPathType | null = null,
    invert1: boolean = false,
    invert2: boolean = false,
    invertout: boolean = false,
    out_type: number | null = null,
    subject: string | null = null,
    rmsdiff_radius: number | null = null,
    rmsdiff_outputfile: string | null = null,
    runner: Runner | null = null,
): MriConcatenateLtaOutputs {
    /**
     * Concatenates two consecutive LTA transformations into one overall transformation, Out = LTA2*LTA1.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param lta_1 File for LTA transformation that maps some src1 to dst1
     * @param lta_2 File for LTA transformation that maps dst1 (src2) to dst2
     * @param lta_final File for the combined LTA maps: src1 to dst2 = LTA2*LTA1
     * @param tal_src Specify source (file1) for Talairach transformation
     * @param tal_template Specify template (file2) for Talairach transformation
     * @param invert1 Invert LTA1 before applying it
     * @param invert2 Invert LTA2 before applying it
     * @param invertout Invert output LTA
     * @param out_type Set final LTA type: 0 for VOX2VOX (default), 1 for RAS2RAS
     * @param subject Set subject in output LTA
     * @param rmsdiff_radius Radius used for computing RMS diff between transforms
     * @param rmsdiff_outputfile Output file for RMS diff computation. Use 'nofile' to skip output
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriConcatenateLtaOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_CONCATENATE_LTA_METADATA);
    const params = mri_concatenate_lta_params(lta_1, lta_2, lta_final, tal_src, tal_template, invert1, invert2, invertout, out_type, subject, rmsdiff_radius, rmsdiff_outputfile)
    return mri_concatenate_lta_execute(params, execution);
}


export {
      MRI_CONCATENATE_LTA_METADATA,
      MriConcatenateLtaOutputs,
      MriConcatenateLtaParameters,
      mri_concatenate_lta,
      mri_concatenate_lta_params,
};
