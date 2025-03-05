// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const NIFTI_INFORMATION_METADATA: Metadata = {
    id: "aae86bd1571798a6e19c7191f8f0421755a39411.boutiques",
    name: "nifti-information",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface NiftiInformationPrintHeaderParameters {
    "__STYXTYPE__": "print_header";
    "opt_allow_truncated": boolean;
}


interface NiftiInformationPrintXmlParameters {
    "__STYXTYPE__": "print_xml";
    "opt_version_version"?: string | null | undefined;
}


interface NiftiInformationParameters {
    "__STYXTYPE__": "nifti-information";
    "nifti_file": string;
    "print_header"?: NiftiInformationPrintHeaderParameters | null | undefined;
    "opt_print_matrix": boolean;
    "print_xml"?: NiftiInformationPrintXmlParameters | null | undefined;
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
        "nifti-information": nifti_information_cargs,
        "print_header": nifti_information_print_header_cargs,
        "print_xml": nifti_information_print_xml_cargs,
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


function nifti_information_print_header_params(
    opt_allow_truncated: boolean = false,
): NiftiInformationPrintHeaderParameters {
    /**
     * Build parameters.
    
     * @param opt_allow_truncated print the header even if the data is truncated
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "print_header" as const,
        "opt_allow_truncated": opt_allow_truncated,
    };
    return params;
}


function nifti_information_print_header_cargs(
    params: NiftiInformationPrintHeaderParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-print-header");
    if ((params["opt_allow_truncated"] ?? null)) {
        cargs.push("-allow-truncated");
    }
    return cargs;
}


function nifti_information_print_xml_params(
    opt_version_version: string | null = null,
): NiftiInformationPrintXmlParameters {
    /**
     * Build parameters.
    
     * @param opt_version_version convert the XML to a specific CIFTI version (default is the file's cifti version): the CIFTI version to use
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "print_xml" as const,
    };
    if (opt_version_version !== null) {
        params["opt_version_version"] = opt_version_version;
    }
    return params;
}


function nifti_information_print_xml_cargs(
    params: NiftiInformationPrintXmlParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-print-xml");
    if ((params["opt_version_version"] ?? null) !== null) {
        cargs.push(
            "-version",
            (params["opt_version_version"] ?? null)
        );
    }
    return cargs;
}


/**
 * Output object returned when calling `nifti_information(...)`.
 *
 * @interface
 */
interface NiftiInformationOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function nifti_information_params(
    nifti_file: string,
    print_header: NiftiInformationPrintHeaderParameters | null = null,
    opt_print_matrix: boolean = false,
    print_xml: NiftiInformationPrintXmlParameters | null = null,
): NiftiInformationParameters {
    /**
     * Build parameters.
    
     * @param nifti_file the nifti/cifti file to examine
     * @param print_header display the header contents
     * @param opt_print_matrix output the values in the matrix (cifti only)
     * @param print_xml print the cifti XML (cifti only)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "nifti-information" as const,
        "nifti_file": nifti_file,
        "opt_print_matrix": opt_print_matrix,
    };
    if (print_header !== null) {
        params["print_header"] = print_header;
    }
    if (print_xml !== null) {
        params["print_xml"] = print_xml;
    }
    return params;
}


function nifti_information_cargs(
    params: NiftiInformationParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("wb_command");
    cargs.push("-nifti-information");
    cargs.push((params["nifti_file"] ?? null));
    if ((params["print_header"] ?? null) !== null) {
        cargs.push(...dynCargs((params["print_header"] ?? null).__STYXTYPE__)((params["print_header"] ?? null), execution));
    }
    if ((params["opt_print_matrix"] ?? null)) {
        cargs.push("-print-matrix");
    }
    if ((params["print_xml"] ?? null) !== null) {
        cargs.push(...dynCargs((params["print_xml"] ?? null).__STYXTYPE__)((params["print_xml"] ?? null), execution));
    }
    return cargs;
}


function nifti_information_outputs(
    params: NiftiInformationParameters,
    execution: Execution,
): NiftiInformationOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: NiftiInformationOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function nifti_information_execute(
    params: NiftiInformationParameters,
    execution: Execution,
): NiftiInformationOutputs {
    /**
     * Display information about a nifti/cifti file.
     * 
     * You must specify at least one -print-* option.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `NiftiInformationOutputs`).
     */
    params = execution.params(params)
    const cargs = nifti_information_cargs(params, execution)
    const ret = nifti_information_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function nifti_information(
    nifti_file: string,
    print_header: NiftiInformationPrintHeaderParameters | null = null,
    opt_print_matrix: boolean = false,
    print_xml: NiftiInformationPrintXmlParameters | null = null,
    runner: Runner | null = null,
): NiftiInformationOutputs {
    /**
     * Display information about a nifti/cifti file.
     * 
     * You must specify at least one -print-* option.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param nifti_file the nifti/cifti file to examine
     * @param print_header display the header contents
     * @param opt_print_matrix output the values in the matrix (cifti only)
     * @param print_xml print the cifti XML (cifti only)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `NiftiInformationOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(NIFTI_INFORMATION_METADATA);
    const params = nifti_information_params(nifti_file, print_header, opt_print_matrix, print_xml)
    return nifti_information_execute(params, execution);
}


export {
      NIFTI_INFORMATION_METADATA,
      NiftiInformationOutputs,
      NiftiInformationParameters,
      NiftiInformationPrintHeaderParameters,
      NiftiInformationPrintXmlParameters,
      nifti_information,
      nifti_information_params,
      nifti_information_print_header_params,
      nifti_information_print_xml_params,
};
