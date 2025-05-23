// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_MAP_CPDAT_METADATA: Metadata = {
    id: "3145524ba5c9130823389616d1a5740a150f0c94.boutiques",
    name: "mri_map_cpdat",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriMapCpdatParameters {
    "__STYXTYPE__": "mri_map_cpdat";
    "input_file": InputPathType;
    "output_file": string;
    "lta_file"?: InputPathType | null | undefined;
    "to_mni305"?: string | null | undefined;
    "from_mni305"?: string | null | undefined;
    "subject_list_file"?: InputPathType | null | undefined;
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
        "mri_map_cpdat": mri_map_cpdat_cargs,
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
        "mri_map_cpdat": mri_map_cpdat_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_map_cpdat(...)`.
 *
 * @interface
 */
interface MriMapCpdatOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output control point text file
     */
    output_ctrl_file: OutputPathType;
}


function mri_map_cpdat_params(
    input_file: InputPathType,
    output_file: string,
    lta_file: InputPathType | null = null,
    to_mni305: string | null = null,
    from_mni305: string | null = null,
    subject_list_file: InputPathType | null = null,
): MriMapCpdatParameters {
    /**
     * Build parameters.
    
     * @param input_file Input control point text file
     * @param output_file Output control point text file
     * @param lta_file LTA transform file to be applied
     * @param to_mni305 Get LTA from talairach.xfm for a specific subject
     * @param from_mni305 Get LTA from talairach.xfm from a specific subject
     * @param subject_list_file Maps all control points from all subjects listed in the text/ascii subjectlistfile to MNI305 (talairach) space
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_map_cpdat" as const,
        "input_file": input_file,
        "output_file": output_file,
    };
    if (lta_file !== null) {
        params["lta_file"] = lta_file;
    }
    if (to_mni305 !== null) {
        params["to_mni305"] = to_mni305;
    }
    if (from_mni305 !== null) {
        params["from_mni305"] = from_mni305;
    }
    if (subject_list_file !== null) {
        params["subject_list_file"] = subject_list_file;
    }
    return params;
}


function mri_map_cpdat_cargs(
    params: MriMapCpdatParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_map_cpdat");
    cargs.push(
        "-in",
        execution.inputFile((params["input_file"] ?? null))
    );
    cargs.push(
        "-out",
        (params["output_file"] ?? null)
    );
    if ((params["lta_file"] ?? null) !== null) {
        cargs.push(
            "-lta",
            execution.inputFile((params["lta_file"] ?? null))
        );
    }
    if ((params["to_mni305"] ?? null) !== null) {
        cargs.push(
            "-tomni305",
            (params["to_mni305"] ?? null)
        );
    }
    if ((params["from_mni305"] ?? null) !== null) {
        cargs.push(
            "-frommni305",
            (params["from_mni305"] ?? null)
        );
    }
    if ((params["subject_list_file"] ?? null) !== null) {
        cargs.push(
            "-slf",
            execution.inputFile((params["subject_list_file"] ?? null))
        );
    }
    return cargs;
}


function mri_map_cpdat_outputs(
    params: MriMapCpdatParameters,
    execution: Execution,
): MriMapCpdatOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriMapCpdatOutputs = {
        root: execution.outputFile("."),
        output_ctrl_file: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function mri_map_cpdat_execute(
    params: MriMapCpdatParameters,
    execution: Execution,
): MriMapCpdatOutputs {
    /**
     * Maps a control.dat file to a different space using an LTA.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriMapCpdatOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_map_cpdat_cargs(params, execution)
    const ret = mri_map_cpdat_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_map_cpdat(
    input_file: InputPathType,
    output_file: string,
    lta_file: InputPathType | null = null,
    to_mni305: string | null = null,
    from_mni305: string | null = null,
    subject_list_file: InputPathType | null = null,
    runner: Runner | null = null,
): MriMapCpdatOutputs {
    /**
     * Maps a control.dat file to a different space using an LTA.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_file Input control point text file
     * @param output_file Output control point text file
     * @param lta_file LTA transform file to be applied
     * @param to_mni305 Get LTA from talairach.xfm for a specific subject
     * @param from_mni305 Get LTA from talairach.xfm from a specific subject
     * @param subject_list_file Maps all control points from all subjects listed in the text/ascii subjectlistfile to MNI305 (talairach) space
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriMapCpdatOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_MAP_CPDAT_METADATA);
    const params = mri_map_cpdat_params(input_file, output_file, lta_file, to_mni305, from_mni305, subject_list_file)
    return mri_map_cpdat_execute(params, execution);
}


export {
      MRI_MAP_CPDAT_METADATA,
      MriMapCpdatOutputs,
      MriMapCpdatParameters,
      mri_map_cpdat,
      mri_map_cpdat_params,
};
